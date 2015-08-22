var DRAW = function () {
    "use strict";

    var drawObj = {};

    var numberOfLines;
    var minimumPadding;
    var percentRectPadding;

    var canvas = document.getElementById('drawfield');
    var ctx = canvas.getContext('2d');
    var rectWidth;
    var rectPad;
    var actualPadding;

    ctx.fillStyle = 'white';

    drawObj.initialize = function (testObj) {
        numberOfLines = testObj.values.length;
        minimumPadding = 20;
        percentRectPadding = 0.20;

        rectWidth = Math.floor((canvas.width - minimumPadding * 2) / (numberOfLines));
        rectWidth = Math.floor(rectWidth * (1 - percentRectPadding));
        rectPad = Math.floor(rectWidth * percentRectPadding);
        actualPadding = (canvas.width - rectWidth * numberOfLines - rectPad * (numberOfLines - 1)) / 2;
    };

    drawObj.render = function (testObj) {
        var xpos;
        var ypos;
        var height;
        for (var i = 0; i < numberOfLines; i += 1) {
            xpos = actualPadding + i * (rectWidth + rectPad);
            ypos = canvas.height - minimumPadding;
            height = Math.floor((canvas.height - rectWidth) * ((testObj.values[i] / testObj.values.length)) + rectWidth);
            ctx.fillRect(xpos, ypos, rectWidth, 0 - height);
        }
    };

    drawObj.testDraw = function () {
        var xpos;
        var ypos;
        var height;
        for (var i = 0; i < numberOfLines; i += 1) {
            xpos = actualPadding + i * (rectWidth + rectPad);
            ypos = canvas.height - minimumPadding;
            height = Math.floor((canvas.height - rectWidth) * (i / numberOfLines)) + rectWidth;
            ctx.fillRect(xpos, ypos, rectWidth, 0 - height);
        }
    };

    return drawObj;
}();

//var testObj = {};
//testObj.values = [3,2,1,4,0];

//DRAW.initialize(testObj);
//DRAW.render(testObj);

//var testval = 2;