/* jshint -W079 */

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {};

    sortObj.name = 'Insertion Sort';

    sortObj.sort = function* sort(sortArr) {
        var j;
        var tempSpace;
        var comparisons = 0;
        for (var i = 1; i < sortArr.length; i += 1) {
            j = i;
            while (j > 0 && sortArr[j - 1] > sortArr[j]) {
                tempSpace = sortArr[j - 1];
                sortArr[j - 1] = sortArr[j];
                sortArr[j] = tempSpace;
                j -= 1;
                comparisons += 1;
                yield {target: j, comparisons: comparisons};
            }
        }
        return false;
    };

    SORTERS.push(sortObj);
})();

