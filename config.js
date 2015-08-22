var CONFIG = function(){
    "use strict";
    var confObj = {}

    confObj.arraySize = 25;

    confObj.scramble = UTILITY.scramble;
    confObj.sorter = INSERTIONSORTER.sorter;

    confObj.minimumPadding = 20;
    confObj.percentRectPadding = 0.20;

    return confObj;
}();