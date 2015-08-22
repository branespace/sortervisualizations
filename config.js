/* jshint -W079 */

var CONFIG = function () {
    "use strict";

    var confObj = {};

    confObj.defaultArraySize = 50;
    confObj.arraySize = confObj.defaultArraySize;

    confObj.scramble = UTILITY.scramble;
    confObj.sorter = null;

    confObj.minimumPadding = 0;
    confObj.percentRectPadding = 0.20;

    confObj.defaultTimeStep = 50;
    confObj.timeStep = confObj.defaultTimeStep;
    confObj.rectColor = 'SteelBlue';
    confObj.targetColor = 'Red';
    confObj.importantColor = 'SeaGreen';
    confObj.regionBorderColor = 'Black';
    confObj.gridColor = 'DarkGray';
    confObj.gridLineWidth = 1;
    confObj.gridLineSpacing = 100;

    confObj.cornerRadius = 3;

    confObj.textColor = 'black';
    confObj.textFont = '18px monospace';


    return confObj;
}();