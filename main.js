/* jshint -W079 */

var APP = function () {
    "use strict";

    var appObj = {};

    var testObj = {};
    var intervalID;
    var sorter;
    var testArray;

    appObj.stepAnimate = function () {
        testObj.changes = sorter.next();
        if (testObj.changes.done === true) {
            APP.stopAnimate();
            return;
        }
        DRAW.render(testObj);
    };

    appObj.beginAnimate = function () {
        testArray = [];

        for (var i = 0; i < CONFIG.arraySize; i += 1) {
            testArray.push(i);
        }

        testArray = CONFIG.scramble(testArray);
        sorter = CONFIG.sorter.sort(testArray);

        testObj.values = testArray;

        DRAW.initialize();
        APP.stepAnimate();
        appObj.registerInterval(APP.stepAnimate, CONFIG.timeStep);
    };

    appObj.stopAnimate = function () {
        window.clearInterval(intervalID);
    };

    appObj.continueAnimate = function () {
        appObj.registerInterval(APP.stepAnimate, CONFIG.timeStep);
    };

    appObj.startGrid = function () {
        DRAW.initialize();
    };

    appObj.registerInterval = function (callback, time){
        window.clearInterval(intervalID);
        intervalID = window.setInterval(callback, time);
    };

    return appObj;
}();