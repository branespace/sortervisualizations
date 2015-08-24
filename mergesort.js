/* jshint -W079 */
// JSHint directive: SORTER redefined

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {},       // this sorting object
        comparisons;        // number of comparisons performed

    sortObj.name = 'Merge Sort';

    sortObj.sort = function* sort(sortArray) {
        var i,      // generic loop index
            j,      // generic inner loop index
            merger, // merge generator
            merged; // merge result

        comparisons = 0;

        for (i = 1; i < Math.floor(sortArray.length / 2) + 1; i = i * 2) {
            for (j = i; j < sortArray.length; j = j + 2 * i) {
                merger = merge(sortArray, j - i, j, Math.min(j + i, sortArray.length));
                merged = merger.next();
                while (!merged.done) {
                    yield merged.value;
                    merged = merger.next();
                }
            }
        }
        merger = merge(sortArray, 0, i, sortArray.length);
        merged = merger.next();
        while (!merged.done) {
            yield merged.value;
            merged = merger.next();
        }
        return false;
    };

    function* merge(sortArray, start, middle, end) {
        var tempArray = [],     // temporary holding array
            left = 0,           // left index
            right = 0,          // right index
            i = 0,              // index of working point
            j;                  // generic loop index

        while ((left < middle - start) && (right < end - middle)) {
            if (sortArray[start + left] < sortArray[middle + right]) {
                tempArray[i] = sortArray[start + left];
                left += 1;
            } else {
                tempArray[i] = sortArray[middle + right];
                right += 1;
            }
            i += 1;
            comparisons += 1;
            yield {
                target: start + left,
                high: end - 1,
                low: start,
                comparisons: comparisons
            };
        }

        while (right < end - middle) {
            tempArray[i] = sortArray[middle + right];
            i += 1;
            right += 1;
            comparisons += 1;
            yield {
                target: middle + right - 1,
                high: end - 1,
                low: start,
                comparisons: comparisons
            };
        }

        while (left < middle - start) {
            tempArray[i] = sortArray[start + left];
            i += 1;
            left += 1;
            comparisons += 1;
            yield {
                target: start + left - 1,
                high: end - 1,
                low: start,
                comparisons: comparisons
            };
        }

        for (j = 0; j < tempArray.length; j += 1) {
            sortArray[start + j] = tempArray[j];
            comparisons += 1;
            yield {
                target: start + j,
                high: end - 1,
                low: start,
                comparisons: comparisons
            };
        }
    }

    SORTERS.push(sortObj);
})();

