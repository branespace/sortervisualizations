/* jshint -W079 */
// JSHint directive: SORTER redefined

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {},       // this sorting object
        comparisons;        // number of comparisons performed

    sortObj.name = 'Bubble Sort';

    sortObj.sort = function* sort(sortArray) {
        var length = sortArray.length,  // cache array length
            swapped = true;             // boolean: did we do a swap?

        comparisons = 0;

        while (swapped) {
            swapped = false;
            for (var i = 1; i <= length - 1; i += 1) {
                yield {target: i, comparisons: comparisons};
                comparisons += 1;
                if (sortArray[i - 1] > sortArray[i]) {
                    UTILITY.swap(sortArray, i, i - 1);
                    swapped = true;
                    yield {
                        target: i, important: i - 1,
                        comparisons: comparisons
                    };
                }
            }
        }
        yield {comparisons: comparisons};
        return false;
    };

    // Add this to SORTERS list
    SORTERS.push(sortObj);
})();

