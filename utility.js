var UTILITY = function(){
    "use strict";

    var utilityObj = {};

    utilityObj.scramble = function scramble(targetArray){
        var firstValue;
        var targetIndex;

        if(targetArray.length < 2){
            return targetArray;
        }

        if(targetArray.length === 2){
            return targetArray.reverse();
        }

        for(var i = 0; i < targetArray.length; i += 1){
            firstValue = targetArray[i];
            targetIndex = Math.floor(Math.random() * targetArray.length);
            while (targetIndex === i){
                targetIndex = Math.floor(Math.random() * targetArray.length);
            }
            targetArray[i] = targetArray[targetIndex];
            targetArray[targetIndex] = firstValue;
        }
        return targetArray;
    };

    return utilityObj;
}();