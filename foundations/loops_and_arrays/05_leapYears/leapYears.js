const leapYears = function (year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (
        isYearDivisibleByFour &&
        (!isCentury || isYearDivisibleByFourHundred)
    ) {
        console.log(true);
    } else {
        console.log(false);
    }
};

leapYears(2000);
leapYears(1985);

// Do not edit below this line
module.exports = leapYears;
