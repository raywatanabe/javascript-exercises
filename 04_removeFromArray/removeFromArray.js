const removeFromArray = function() {
    // First argument will be array
    let array = arguments[0];

    // Starting from second argument, check to see if argument is present in array. If yes, then remove from array
    for (let j = 1; j < arguments.length; j++) {
        for (let i = 0; i < array.length; i++) {       
            if (arguments[j] === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
