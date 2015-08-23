/* jshint -W079 */

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {};

    sortObj.name = 'Merge Sort';

    var comparisons = 0;

    sortObj.sort = function* sort(sortArr) {
        var i;
        var j;
        var merger;
        var merged;
        for (i = 1; i < Math.floor(sortArr.length / 2) + 1; i = i * 2) {
            for (j = i; j < sortArr.length; j = j + 2 * i) {
                merger = merge(sortArr, j - i, j, Math.min(j + i, sortArr.length));
                merged = merger.next();
                while (!merged.done) {
                    yield merged.value;
                    merged = merger.next();
                }
            }
        }
        merger = merge(sortArr, 0, i, sortArr.length);
        merged = merger.next();
        while (!merged.done) {
            yield merged.value;
            merged = merger.next();
        }
        return false;
    };

    function* merge(sortArr, start, middle, end) {
        var temp = [];
        var l = 0;
        var r = 0;
        var i = 0;
        while ((l < middle - start) && (r < end - middle)) {
            if (sortArr[start + l] < sortArr[middle + r]) {
                temp[i] = sortArr[start + l];
                l += 1;
            } else {
                temp[i] = sortArr[middle + r];
                r += 1;
            }
            i += 1;
            comparisons += 1;
            yield {target: start + l, high: end - 1, low: start, comparisons: comparisons};
        }
        while (r < end - middle) {
            temp[i] = sortArr[middle + r];
            i += 1;
            r += 1;
            comparisons += 1;
            yield {target: middle + r - 1, high: end - 1, low: start, comparisons: comparisons};
        }
        while (l < middle - start) {
            temp[i] = sortArr[start + l];
            i += 1;
            l += 1;
            comparisons += 1;
            yield {target: start + l - 1, high: end - 1, low: start, comparisons: comparisons};
        }
        for (var j = 0; j < temp.length; j += 1) {
            sortArr[start + j] = temp[j];
            comparisons += 1;
            yield {target: start + j, high: end - 1, low: start, comparisons: comparisons};
        }
    }

    SORTERS.push(sortObj);
})();

