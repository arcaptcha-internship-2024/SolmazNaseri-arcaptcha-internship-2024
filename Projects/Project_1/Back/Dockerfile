FROM docker.arvancloud.ir/node:22-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]
