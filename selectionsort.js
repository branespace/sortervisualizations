/* jshint -W079 */

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {};

    sortObj.name = 'Selection Sort';

    sortObj.sort = function* sort(sortArr) {
        var minimumIndex;
        var tempSpace;
        var comparisons = 0;
        for (var i = 0; i < sortArr.length; i += 1) {
            minimumIndex = i;
            for (var j = i + 1; j < sortArr.length; j += 1) {
                if (sortArr[minimumIndex] > sortArr[j]) {
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
                tempSpace = sortArr[minimumIndex];
                sortArr[minimumIndex] = sortArr[i];
                sortArr[i] = tempSpace;
                comparisons += 1;
                yield {target: i, comparisons: comparisons};
            }
        }
        return false;
    };

    SORTERS.push(sortObj);
})();
