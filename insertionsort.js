/* jshint -W079 */
// JSHint directive: SORTER redefined

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {},       // this sorting object
        comparisons;        // number of comparisons performed

    sortObj.name = 'Insertion Sort';

    sortObj.sort = function* sort(sortArray) {
        var i,      // generic loop index
            j;      // generic inner loop index

        comparisons = 0;

        for (i = 1; i < sortArray.length; i += 1) {
            j = i;
            while (j > 0 && sortArray[j - 1] > sortArray[j]) {
                UTILITY.swap(sortArray, j, j - 1);
                j -= 1;
                comparisons += 1;
                yield {target: j, comparisons: comparisons};
            }
        }
        return false;
    };

    SORTERS.push(sortObj);
})();

