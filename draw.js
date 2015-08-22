var DRAW = function () {
    "use strict";

    var drawObj = {};

    var canvas = document.getElementById('drawfield');
    var ctx = canvas.getContext('2d');
    var rectWidth;
    var rectPad;
    var actualPadding;

    ctx.fillStyle = 'white';

    drawObj.initialize = function () {
        rectWidth = Math.floor((canvas.width - CONFIG.minimumPadding * 2) / (CONFIG.arraySize));
        rectWidth = Math.floor(rectWidth * (1 - CONFIG.percentRectPadding));
        rectPad = Math.floor(rectWidth * CONFIG.percentRectPadding);
        actualPadding = (canvas.width - rectWidth * CONFIG.arraySize - rectPad * (CONFIG.arraySize - 1)) / 2;
    };

    drawObj.render = function (testObj) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < CONFIG.arraySize; i += 1) {
            drawBox(i, testObj.values[i], CONFIG.rectColor);
        }
        drawBox(testObj.changedIndex.value, testObj.values[testObj.changedIndex.value], CONFIG.targetColor);
    };

    function drawBox(index, value, color) {
        var xpos;
        var ypos;
        var height;
        ctx.fillStyle = color;
        xpos = actualPadding + index * (rectWidth + rectPad);
        ypos = canvas.height - CONFIG.minimumPadding;
        height = Math.floor((canvas.height - rectWidth) * ((value / CONFIG.arraySize)) + rectWidth);
        ctx.fillRect(xpos, ypos, rectWidth, 0 - height);
    }

    return drawObj;
}();
