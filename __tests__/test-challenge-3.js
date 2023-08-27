const assignment = require('../src/assignment.js');

const { celsiusToFahrenheit } = assignment;
const maybe = celsiusToFahrenheit === undefined ? test.skip : test;

maybe('Challenge - 3 : my celsiusToFahrenheit function can convert an array of temperatures', async () => {

    expect(celsiusToFahrenheit([ 51.21, 23, 0, -55, 100 ])).toStrictEqual([ 124, 73, 32, -67, 212 ]);
});