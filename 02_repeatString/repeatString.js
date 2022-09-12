let newString = "";
const repeatString = function(string, num) {
    if (num >= 0) {
        newString = string.repeat(num);
        return newString;
    } else {
        return "ERROR";
    }
    
};
console.log(newString);
// Do not edit below this line
module.exports = repeatString;
