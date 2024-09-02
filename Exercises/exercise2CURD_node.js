const http = require('http');

let database = [];

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const method = req.method;
    const index = parseInt(url.searchParams.get('index'), 10);

    let body = '';
    req.on('data', chunk => body += chunk.toString());

    req.on('end', () => {
        let response = '';
        const record = body ? JSON.parse(body) : null;

        if (method === 'POST' && url.pathname === '/create') {
            database.push(record);
            response = `Record added: ${JSON.stringify(record)}`;
        } else if (method === 'GET' && url.pathname === '/read') {
            response = isNaN(index) ? JSON.stringify(database) : database[index] ? JSON.stringify(database[index]) : "Record not found.";
        } else if (method === 'PUT' && url.pathname === '/update' && !isNaN(index) && database[index]) {
            database[index] = record;
            response = `Record updated: ${JSON.stringify(record)}`;
        } else if (method === 'DELETE' && url.pathname === '/delete' && !isNaN(index) && database[index]) {
            response = `Record deleted: ${JSON.stringify(database.splice(index, 1)[0])}`;
        } else {
            response = "Not Found";
            res.writeHead(404, { 'Content-Type': 'text/plain' });
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
    });
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));