    var arraySize = 10;

    var testArray = [];

    for(var i = 0; i < arraySize; i += 1){
        testArray.push(i);
    }

    testArray = UTILITY.scramble(testArray);

    var sorter = INSERTIONSORTER.sorter(testArray);
    sorter.next();

    var testObj = {};
    testObj.values = testArray;

    DRAW.initialize(testObj);
    DRAW.render(testObj);
