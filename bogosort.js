/* jshint -W079 */
// JSHint directive: SORTER redefined

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {},       // this sorting object
        comparisons;        // number of comparisons performed

    sortObj.name = 'Bogo Sort';

    sortObj.sort = function* sort(sortArray) {
        comparisons = 0;
        while (!checkSorted(sortArray)){
            sortArray = UTILITY.scramble(sortArray);
            comparisons += sortArray.length;
            yield {comparisons: comparisons};
        }
        comparisons += sortArray.length;
        yield {comparisons: comparisons};
        return false;
    };

    function checkSorted(sortArray){
        for (var i = 1, len = sortArray.length; i < len; i += 1){
            if(sortArray[i] < sortArray[i - 1]){
                return false;
            }
        }
        return true;
    }

    // Add this to SORTERS list
    SORTERS.push(sortObj);
})();

