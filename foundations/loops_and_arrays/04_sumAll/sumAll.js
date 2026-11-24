const sumAll = function(min, max) {
    if (min < 0 || max < 0){
        console.error('Error');
    } else if (min > max) {
        console.error('Error');
        
    } else {
        let sum = 0;
        for(let i = min; i <= max; i++){
            sum += i
        }
        console.log(sum);
    }
};

sumAll(0, 4)

// Do not edit below this line
module.exports = sumAll;
