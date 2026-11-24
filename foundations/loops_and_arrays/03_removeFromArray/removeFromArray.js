const removeFromArray = function (arr, index) {
    let theIndex = arr.indexOf(index);
    if (theIndex > -1) {
        arr.splice(theIndex, 1)
    }

    console.log(arr);
};

removeFromArray([1, 2, 3, 4], 3);


// Do not edit below this line
module.exports = removeFromArray;
