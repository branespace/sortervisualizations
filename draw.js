/* jshint -W079 */

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
        drawGrid();
    };

    drawObj.render = function (testObj) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        for (var i = 0; i < CONFIG.arraySize; i += 1) {
            drawBoxRounded(i, testObj.values[i], CONFIG.rectColor);
        }
        if (testObj.changes.value.target !== null) {
            drawBoxRounded(testObj.changes.value.target, testObj.values[testObj.changes.value.target], CONFIG.targetColor);
        }
        if (testObj.changes.value.important !== null) {
            drawBoxRounded(testObj.changes.value.important, testObj.values[testObj.changes.value.important], CONFIG.importantColor);
        }
        if (testObj.changes.value.high !== null) {
            drawBoxRounded(testObj.changes.value.high, testObj.values[testObj.changes.value.high], CONFIG.regionBorderColor);
        }
        if (testObj.changes.value.low !== null) {
            drawBoxRounded(testObj.changes.value.low, testObj.values[testObj.changes.value.low], CONFIG.regionBorderColor);
        }
        ctx.fillStyle = CONFIG.textColor;
        ctx.font = CONFIG.textFont;
        ctx.fillText('Comparisons: ' + testObj.changes.value.comparisons, 25, 25);
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

    function drawBoxRounded(index, value, color) {
        var xpos;
        var ypos;
        var height;
        var corner = CONFIG.cornerRadius;
        xpos = actualPadding + index * (rectWidth + rectPad);
        ypos = canvas.height - CONFIG.minimumPadding;
        height = Math.floor((canvas.height - rectWidth) * ((value / CONFIG.arraySize)) + rectWidth);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(xpos + corner, ypos);
        ctx.lineTo(xpos + rectWidth - corner, ypos);
        ctx.quadraticCurveTo(xpos + rectWidth, ypos, xpos + rectWidth, ypos - corner);
        ctx.lineTo(xpos + rectWidth, ypos + corner - height);
        ctx.quadraticCurveTo(xpos + rectWidth, ypos - height, xpos + rectWidth - corner, ypos - height);
        ctx.lineTo(xpos + corner, ypos - height);
        ctx.quadraticCurveTo(xpos, ypos - height, xpos, ypos - height + corner);
        ctx.lineTo(xpos, ypos - corner);
        ctx.quadraticCurveTo(xpos, ypos, xpos + corner, ypos);
        ctx.closePath();
        ctx.fill();
    }

    function drawGrid() {
        ctx.strokeStyle = CONFIG.gridColor;
        for (var i = 0; i <= canvas.width; i += CONFIG.gridLineSpacing) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        for (i = 0; i <= canvas.height; i += CONFIG.gridLineSpacing) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }
    }

    return drawObj;
}();
