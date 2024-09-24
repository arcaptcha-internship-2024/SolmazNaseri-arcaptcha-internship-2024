function select(n, arr) {
    let shuffledArray = arr
        .map(value => ({ value, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey)
        .map(({ value }) => value);

    return shuffledArray.slice(0, n);
}

module.exports = select;