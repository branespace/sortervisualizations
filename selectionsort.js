/* jshint -W079 */
// JSHint directive: SORTER redefined

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {},       // this sorting object
        comparisons;        // number of comparisons performed

    sortObj.name = 'Selection Sort';

    sortObj.sort = function* sort(sortArray) {
        var minimumIndex;   // index of smallest value

        comparisons = 0;
        for (var i = 0; i < sortArray.length; i += 1) {
            minimumIndex = i;
            for (var j = i + 1; j < sortArray.length; j += 1) {
                if (sortArray[minimumIndex] > sortArray[j]) {
                    minimumIndex = j;
                }
                comparisons += 1;
                yield {
                    important: minimumIndex,
                    target: j,
                    comparisons: comparisons
                };
            }
            if (minimumIndex !== i) {
                UTILITY.swap(sortArray, i, minimumIndex);
                comparisons += 1;
                yield {target: i, comparisons: comparisons};
            }
        }
        return false;
    };

    SORTERS.push(sortObj);
})();
