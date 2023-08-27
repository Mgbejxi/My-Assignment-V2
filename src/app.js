const assignment = require('./assignment.js');

const { sumOfNumbersTo, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbersTo && typeof sumOfNumbersTo === 'function'){
    console.log(sumOfNumbersTo(99));
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}