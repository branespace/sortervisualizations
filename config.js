/* jshint -W079 */

var CONFIG = function () {
    "use strict";

    var confObj = {};

    confObj.arraySize = 50;

    confObj.scramble = UTILITY.scramble;
    confObj.sorter = SELECTIONSORT.sorter;

    confObj.minimumPadding = 0;
    confObj.percentRectPadding = 0.20;

    confObj.timeStep = 50;
    confObj.rectColor = 'SteelBlue';
    confObj.targetColor = 'Red';
    confObj.importantColor = 'SeaGreen';
    confObj.gridColor = 'DarkGray';
    confObj.gridLineWidth = 1;
    confObj.gridLineSpacing = 100;

    confObj.cornerRadius = 3;

    confObj.textColor = 'black';
    confObj.textFont = '18px monospace';


    return confObj;
}();