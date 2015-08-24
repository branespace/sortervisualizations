/* jshint -W079 */
// JSHint directive: SORTER redefined

var SORTERS = SORTERS || [];

(function () {
    "use strict";

    var sortObj = {},       // this sorting object
        comparisons;        // number of comparisons performed

    sortObj.name = 'Quick Sort';

    sortObj.sort = function* sort(sortArray) {
        comparisons = 0;

        // Initialize quicksort generator yield values until it ends
        var qsort = quicksort(sortArray, 0, sortArray.length - 1),
            value = qsort.next();
        while (!value.done) {
            yield value.value;
            value = qsort.next();
        }
        return false;
    };

    // Core quicksort algorithm
    function* quicksort(sortArray, low, high) {
        var partitioner,        // partitioning generator
            newPartition;       // calculated partition return

        if ((high - low) > 0) {
            comparisons += 1;
            partitioner = partition(sortArray, low, high);
            newPartition = partitioner.next();

            while (!newPartition.value.finished) {
                yield newPartition.value;
                newPartition = partitioner.next();
            }

            yield newPartition.value;
            yield* quicksort(sortArray, low, newPartition.value.target - 1);
            yield* quicksort(sortArray, newPartition.value.target + 1, high);
        }
    }

    // Partitions the array
    function* partition(sortArray, low, high) {
        var i,                  // generic loop index
            firstHigh = low;    // index of a high value
        for (i = low; i < high; i += 1) {
            if (sortArray[i] < sortArray[high]) {
                UTILITY.swap(sortArray, i, firstHigh);
                firstHigh += 1;
                comparisons += 1;
            }
            yield {
                target: i, important: high, comparisons: comparisons,
                finished: false, low: low, high: high
            };
        }
        UTILITY.swap(sortArray, high, firstHigh);
        yield {
            target: firstHigh, important: high, comparisons: comparisons,
            finished: true, low: low, high: high
        };
    }

    SORTERS.push(sortObj);
})();

