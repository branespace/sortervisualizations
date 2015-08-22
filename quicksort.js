/* jshint -W079 */

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {};

    sortObj.name = 'QuickSort';

    var comparisons = 0;

    sortObj.sort = function* sort(sortArr){
        var qsort = quicksort(sortArr, 0, sortArr.length - 1);
        var value = qsort.next();
        while(!value.done) {
            yield value.value;
            value = qsort.next();
        }
        return false;
    };

    function* quicksort(sortArr, low, high){
        var parter;
        var part;
        if ((high - low) > 0){
            comparisons += 1;
            parter = partition(sortArr, low, high);
            part = parter.next();
            while(!part.value.finished) {
                yield part.value;
                part = parter.next();
            }
            yield part.value;
            yield* quicksort(sortArr, low, part.value.target - 1);
            yield* quicksort(sortArr, part.value.target + 1, high);
        }
    }

    function* partition(sortArr, low, high){
        var i;
        var p;
        var firstHigh;
        var tempSpace;
        p = high;
        firstHigh = low;
        for ( i = low; i < high; i += 1){
            if(sortArr[i] < sortArr[p]){
                tempSpace = sortArr[i];
                sortArr[i] = sortArr[firstHigh];
                sortArr[firstHigh] = tempSpace;
                firstHigh += 1;
                comparisons += 1;
            }
            yield {target: i, important: high, comparisons: comparisons, finished:false, low: low, high: high};
        }
        tempSpace = sortArr[p];
        sortArr[p] = sortArr[firstHigh];
        sortArr[firstHigh] = tempSpace;
        console.log('part');
        yield {target: firstHigh, important: high, comparisons: comparisons, finished:true, low: low, high: high};
    }

    SORTERS.push(sortObj);
})();

