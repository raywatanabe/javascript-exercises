const reverseString = function(string) {
    let array = string.split("");
    let reverseArray = array.reverse();
    let newString = reverseArray.toString();
    newString = newString.replaceAll(",", "");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
