const repeatString = function (string, repeatAmount) {
    arr = [];
    if (repeatAmount < 0) {
        return "ERROR";
    }

    for (i = 0; i < repeatAmount; i++) {
        arr.push(string);
    }

    return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
