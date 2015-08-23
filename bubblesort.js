/* jshint -W079 */

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {};

    sortObj.name = 'Bubble Sort';

    var comparisons = 0;

    sortObj.sort = function* sort(sortArr){
        comparisons = 0;
        var n = sortArr.length;
        var swapped = true;
        var tempSpace;
        while(swapped){
            swapped = false;
            for(var i = 1; i <= n - 1; i += 1){
                yield {target:i, comparisons:comparisons};
                comparisons += 1;
                if(sortArr[i - 1] > sortArr[i]){
                    tempSpace = sortArr[i];
                    sortArr[i] = sortArr[i - 1];
                    sortArr[i - 1] = tempSpace;
                    swapped = true;
                    yield {target:i, comparisons:comparisons};
                }
            }
        }
        yield {comparisons: comparisons};
        return false;
    };

    SORTERS.push(sortObj);
})();

