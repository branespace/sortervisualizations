var APP = function() {
    "use strict";

    var appObj = {};

    var testObj = {};
    var intervalID;
    var sorter;
    var testArray;

    appObj.stepAnimate = function(){
        testObj.changedIndex = sorter.next();
        if(testObj.changedIndex.done === true){
            APP.stopAnimate();
            return;
        }
        DRAW.render(testObj);
    };

    appObj.beginAnimate = function(){
        testArray = [];

        for (var i = 0; i < CONFIG.arraySize; i += 1) {
            testArray.push(i);
        }

        testArray = CONFIG.scramble(testArray);
        sorter = CONFIG.sorter(testArray);

        testObj.values = testArray;

        DRAW.initialize();
        APP.stepAnimate();
        intervalID = window.setInterval(APP.stepAnimate, CONFIG.timeStep);
    };

    appObj.stopAnimate = function(){
        window.clearInterval(intervalID);
    };

    return appObj;
}();
    APP.beginAnimate();

