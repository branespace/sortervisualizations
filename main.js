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
    appObj.stepAnimate = function stepAnimate() {
        // Our sorters are generators, so get next
        stateObj.changes = sorter.next();
        if (stateObj.changes.done === true) {
            APP.stopAnimate();
            return;
        }
        DRAW.render(stateObj);
    };

    // Initialize array, drawing, and timers
    appObj.beginAnimate = function beginAnimate() {
        var i,      // generic loop index
            length; // generic loop length

        testArray = [];

        for (i = 0, length = CONFIG.numberOfItems; i < length; i += 1) {
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

    appObj.stopAnimate = function stopAnimate() {
        window.clearInterval(intervalID);
    };

    // Restarts paused animation
    appObj.continueAnimate = function continueAnimate() {
        appObj.registerInterval(APP.stepAnimate, CONFIG.timeStep);
    };

    // Initializes the field
    appObj.startGrid = function startGrid() {
        DRAW.initialize();
    };

    // Ensures we have only one timer running
    appObj.registerInterval = function registerInterval(callback, time) {
        window.clearInterval(intervalID);
        intervalID = window.setInterval(callback, time);
    };

    return appObj;
}();