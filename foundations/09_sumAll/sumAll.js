const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }

    totalSum = 0;

    if (a < b) {
        for (i = a; i <= b; i++) {
            totalSum += i;
        }
    }

    if (a > b) {
        for (i = b; i <= a; i++) {
            totalSum += i;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
