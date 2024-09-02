const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);

const numbers2 = [1, 2, 3, 4, 5];
const squares = numbers2.map(num => num * num);
console.log(squares);

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const numbers4 = [1, 2, 3, 6, 4, 7, 5, 6, 7, 8];
const firstGreaterThanFive = numbers4.find(num => num > 5);
console.log(firstGreaterThanFive);

const numbers5 = [1, -2, 3, 4, -5];
const hasNegativeNumbers = numbers5.some(num => num < 0);
console.log(hasNegativeNumbers);

const numbers6 = [1, 2, 3, 4, 5];
const allPositive = numbers6.every(num => num > 0);
console.log(allPositive);

const fruits = ['banana', 'apple', 'orange', 'mango'];
const sortedFruits = fruits.sort();
console.log(sortedFruits);

const numbers9 = [1, 2, 3, 4, 5];
const firstThree = numbers9.slice(0, 3);
console.log(firstThree);

const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2);
console.log(numbers);


const data = [
    { name: 'ali', age: 23 },
    { name: 'goli', age: 44 }
];
const totalAge = data.reduce((acc, person) => acc + person.age, 0);
const averageAge = totalAge / data.length;
const result = data.filter(person => person.age > averageAge);
result.forEach(person => {
    person.nameLength = person.name.length;
});

console.log(result);