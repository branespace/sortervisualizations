var CONFIG = function(){
    "use strict";

    var confObj = {};

    confObj.arraySize = 50;

    confObj.scramble = UTILITY.scramble;
    confObj.sorter = INSERTIONSORT.sorter;

    confObj.minimumPadding = 20;
    confObj.percentRectPadding = 0.20;

    confObj.timeStep = 50;
    confObj.rectColor = 'white';
    confObj.targetColor = 'red';
    confObj.importantColor = 'blue';
    confObj.textColor = 'green';
    confObj.textFont = '18px monospace';

    return confObj;
}();