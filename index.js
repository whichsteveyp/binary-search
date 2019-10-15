'use strict';
/*
    Working through Khan Academy a bit and brushing up on algos.
    I've decided to go ahead and start attempting to get in the habit
    of storing things I've learned in files & on github, also on npm.

    I would not really recommend using these, unless otherwise noted
    they are unlikely to be "the best in class" available.
*/

function binarySearch(sortedInputArray, targetValue) {
    // heads up: no data sanitization or any safeguards of the sort
    let min = 0;
    let max = sortedInputArray.length - 1;
    let guess; // i dislike this name, but for now it's what KA had

    // turns out `max > min` here will only work if you _land_ on the target value
    // but if you need to utilze _all_ of the reduction steps to search then `>`
    // will allow you to miss; `>=` will allow you to run once more to find the final
    // targetValue (if available in the arry at all)
    while (max >= min) {
        guess = Math.floor((max+min) / 2);
        if (sortedInputArray[guess] === targetValue) {
            return guess;
        } else if (sortedInputArray[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
};

module.exports = binarySearch;