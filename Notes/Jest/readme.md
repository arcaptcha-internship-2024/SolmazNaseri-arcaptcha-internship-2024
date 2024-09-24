# How to Write Tests with Jest

Jest is a powerful testing library for JavaScript applications. In this guide, we will learn how to write a simple test using Jest.

## 1. Installing Jest

To get started, you first need to add Jest to your project.
```bash
npm install --save-dev jest

```
## 2. Configuring Jest
By default, Jest doesn't require special configuration. It will automatically search for test files in the __tests__ folder or files with the extensions *.test.js* or *.spec.js.* You can also add the following script to your package.json file to run tests with npm test:
```js
{
  "scripts": {
    "test": "jest"
  }
}
```
## 3. writing the test
for example we have a simple sum function in sum.js file like this:

```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
for testing this function we should write our jest test in file with name like *sum.test.js*
``` js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
**test**: Defines a single test. The first parameter is the test name, and the second parameter is the function that runs the test.
**expect**: Used to check the output of the function.
***toBe***: Checks that the actual value is equal to the expected value.

## 4. Running test
To run your tests, simply execute the following command:
``` 
npm test
or
yarn test
```

## 5. Testing Different Features

**toBe**: Checks that a value is exactly equal.
**toEqual**: Used to compare objects and arrays.
**toBeNull**: Checks that a value is null.
**toBeDefined**: Checks that a value is defined.
**toContain**: Checks that an array contains a specific item.