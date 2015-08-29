/* jshint -W079 */
// JSHint directive: UTILITY defined here and JSHint Globals

// UTILITY functions library
var UTILITY = function () {
    "use strict";

    var utilityObj = {};    // UTILITY object

    // Scrambles target array
    utilityObj.scramble = function scramble(targetArray) {
        var targetIndex,    // swap target index
            i,              // generic loop index
            length;         // generic loop length

        if (targetArray.length < 2) {
            return targetArray;
        }

        if (targetArray.length === 2) {
            return targetArray.reverse();
        }

        for (i = 0, length = targetArray.length; i < length; i += 1) {
            targetIndex = Math.floor(Math.random() * length);
            while (targetIndex === i) {
                targetIndex = Math.floor(Math.random() * length);
            }
            utilityObj.swap(targetArray, i, targetIndex);
        }

        return targetArray;
    };

    // Swap indexA and indexB in targetArray
    utilityObj.swap = function swap(targetArray, indexA, indexB) {
        var tempSpace = targetArray[indexA];    // temporary storage

        targetArray[indexA] = targetArray[indexB];
        targetArray[indexB] = tempSpace;
    };

    return utilityObj;
}();