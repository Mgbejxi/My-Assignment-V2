const assignment = require('../src/assignment.js');

const { sumOfNumbersTo } = assignment;
const maybe = sumOfNumbersTo === undefined ? test.skip : test;

maybe(
    'Challenge - 1 : my sumOfNumbersTo function can sum an array of numbers',
    () => {
        expect(sumOfNumbersTo(10)).toBe(55);
    }
);
