var SELECTIONSORT = function() {
    "use strict";

    var sortObj = {};

    sortObj.sorter = function* sorter(sortArr){
        var minimumIndex;
        var tempSpace;
        for (var i = 0; i < sortArr.length; i += 1){
            minimumIndex = i;
            for (var j = i + 1; j < sortArr.length; j += 1){
                if(sortArr[minimumIndex] > sortArr[j]){
                    minimumIndex = j;
                }
                yield {important: minimumIndex, target: j};
            }
            if(minimumIndex !== i){
                tempSpace = sortArr[minimumIndex];
                sortArr[minimumIndex] = sortArr[i];
                sortArr[i] = tempSpace;
                yield {target: i};
            }
        }
        return false;
    };

    return sortObj;
}();
