/* jshint -W079 */
// JSHint directive: CONFIG defined here and JSHint Globals

// CONFIG holds all basic configuration options
var CONFIG = function () {
    "use strict";

    var configObj = {};   // CONFIG object

    // Number of items or size of array
    configObj.numberOfItemsDefault = 50;
    configObj.numberOfItems = configObj.numberOfItemsDefault;

    // Holds our scramble and sort functions (sorter is a generator)
    configObj.scramble = UTILITY.scramble;
    configObj.sorter = null;

    // Default padding for the canvas and percent inter-rectangle padding
    configObj.minimumPadding = 0;
    configObj.percentRectPadding = 0.20;

    // Animation settings
    configObj.defaultTimeStep = 50;
    configObj.timeStep = configObj.defaultTimeStep;

    // Drawing settings
    configObj.rectColor = 'SteelBlue';
    configObj.targetColor = 'Red';
    configObj.importantColor = 'SeaGreen';
    configObj.regionBorderColor = 'Black';
    configObj.gridColor = 'DarkGray';
    configObj.textColor = 'Black';
    configObj.textFont = '18px monospace';
    configObj.gridLineWidth = 1;
    configObj.gridLineSpacing = 100;
    configObj.cornerRadius = 3;

    return configObj;
}();