var APP = function() {
    var testArray = [];

    for (var i = 0; i < CONFIG.arraySize; i += 1) {
        testArray.push(i);
    }

    testArray = CONFIG.scramble(testArray);

    var sorter = CONFIG.sorter(testArray);
    sorter.next();

    var testObj = {};
    testObj.values = testArray;

    DRAW.initialize(testObj);
    DRAW.render(testObj);

}();
