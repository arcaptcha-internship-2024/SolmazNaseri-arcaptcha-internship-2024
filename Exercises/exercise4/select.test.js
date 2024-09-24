const select = require('./select');

describe('Test the select function', () => {

    test('should return an array of correct length', () => {
        const array = [1, 2, 3, 4, 5];
        const result = select(2, array);
        expect(result.length).toBe(2);
    });

    test('should return elements from the original array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = select(3, array);

        result.forEach(item => {
            expect(array.includes(item)).toBe(true);
        });
    });

    test('should not return duplicate elements', () => {
        const array = [1, 2, 3, 4, 5];
        const result = select(4, array);
        const uniqueResult = [...new Set(result)];
        expect(uniqueResult.length).toBe(result.length);
    });

    test('should throw an error if n is larger than the array length', () => {
        const array = [1, 2, 3, 4, 5];
        expect(() => select(6, array)).toThrow();
    });

    test('should return different results for different runs', () => {
        const array = [1, 2, 3, 4, 5];
        const result1 = select(3, array);
        const result2 = select(3, array);
        expect(result1).not.toEqual(result2);
    });
});