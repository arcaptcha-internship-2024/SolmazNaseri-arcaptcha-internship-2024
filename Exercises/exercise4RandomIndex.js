function select(n, arr) {

    let shuffledArray = arr
        .map(value => ({ value, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey)
        .map(({ value }) => value);

    return shuffledArray.slice(0, n);
}

const array = [1, 2, 3, 4, 5];
const result = select(2, array);

console.log(result);