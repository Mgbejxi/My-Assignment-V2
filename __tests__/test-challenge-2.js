const assignment = require('../src/assignment.js');

const { countEvenNumbersWithin } = assignment;
const maybe = countEvenNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbersWithin function can count even numbers in array of numbers', () => {

    expect(countEvenNumbersWithin(10)).toStrictEqual({ count: 5, sum: 30, arrayOfEvenNumbers: [2, 4, 6, 8, 10] });
});