/* jshint -W079 */
// JSHint directive: APP defined here and JSHint Globals

// APP handles animation control, sorting control, and activates DRAW functions
var APP = function () {
    "use strict";

    var appObj = {},        // APP object
        stateObj = {},      // holds sorting array and latest changes
        intervalID,         // ID for setInterval
        sorter,             // currently selected sorter function
        testArray;          // sorting array

    // Single animation step
    appObj.stepAnimate = function () {
        // Our sorters are generators, so get next
        stateObj.changes = sorter.next();
        if (stateObj.changes.done === true) {
            APP.stopAnimate();
            return;
        }
        DRAW.render(stateObj);
    };

    // Initialize array, drawing, and timers
    appObj.beginAnimate = function () {
        var i;      // generic loop index

        testArray = [];

        for (i = 0; i < CONFIG.numberOfItems; i += 1) {
            testArray.push(i);
        }

        // Scramble array and initialize sorter generator
        testArray = CONFIG.scramble(testArray);
        sorter = CONFIG.sorter.sort(testArray);

        stateObj.values = testArray;

        DRAW.initialize();
        APP.stepAnimate();
        appObj.registerInterval(APP.stepAnimate, CONFIG.timeStep);
    };

    appObj.stopAnimate = function () {
        window.clearInterval(intervalID);
    };

    // Restarts paused animation
    appObj.continueAnimate = function () {
        appObj.registerInterval(APP.stepAnimate, CONFIG.timeStep);
    };

    // Initializes the field
    appObj.startGrid = function () {
        DRAW.initialize();
    };

    // Ensures we have only one timer running
    appObj.registerInterval = function (callback, time) {
        window.clearInterval(intervalID);
        intervalID = window.setInterval(callback, time);
    };

    return appObj;
}();