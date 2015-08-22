var CONFIG = function(){
    "use strict";

    var confObj = {}

    confObj.arraySize = 150;

    confObj.scramble = UTILITY.scramble;
    confObj.sorter = INSERTIONSORT.sorter;

    confObj.minimumPadding = 20;
    confObj.percentRectPadding = 0.20;

    confObj.timeStep = 25;
    confObj.rectColor = 'white';
    confObj.targetColor = 'red';
    confObj.importantColor = 'blue';

    return confObj;
}();