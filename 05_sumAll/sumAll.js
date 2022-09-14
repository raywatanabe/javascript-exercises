const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    else if (num1 < num2) {
        for (let i = num1, n = num2; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    else if (num1 > num2) {
        for (let i = num2, n = num1; i <=n; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
