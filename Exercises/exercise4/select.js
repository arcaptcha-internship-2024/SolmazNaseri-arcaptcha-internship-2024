function select(n, arr) {
    if (n > arr.length) {
        throw new Error("تعداد المان‌های درخواستی بیشتر از تعداد المان‌های آرایه است.");
    }
    let shuffledArray = arr
        .map(value => ({ value, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey)
        .map(({ value }) => value);

    return shuffledArray.slice(0, n);
}

module.exports = select;