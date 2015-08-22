//document.onload = function() {
    //"use strict";

    var arraySize = 20;

    var testArray = [];

    for(var i = 0; i < arraySize; i += 1){
        testArray.push(i);
    }

    testArray = UTILITY.scramble(testArray);

    var testObj = {};
    testObj.values = testArray;

    DRAW.initialize(testObj);
    DRAW.render(testObj);
//};