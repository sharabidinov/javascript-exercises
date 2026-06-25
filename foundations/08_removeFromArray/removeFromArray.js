const removeFromArray = function (arr, ...others) {
    for (element of others) {
        arr = arr.filter((el) => el !== element);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
