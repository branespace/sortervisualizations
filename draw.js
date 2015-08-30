/* jshint -W079 */
// JSHint directive: DRAW defined here and JSHint Globals

// Draws animation steps based on input testObject
var DRAW = function () {
    "use strict";

    var drawObj = {},           // DRAW object
        canvas = document.getElementById('drawfield'),  // Canvas object
        canvasContext = canvas.getContext('2d'),        // Canvas context
        rectangleWidth,         // width of single rectangle object
        interRectanglePadding,  // inter-rectangle padding
        sidePadding;            // left and right padding

    // Set sizing for rectangles, padding, and draw the grid
    drawObj.initialize = function () {
        rectangleWidth = Math.floor((canvas.width -
            CONFIG.minimumPadding * 2) / (CONFIG.numberOfItems));
        rectangleWidth = Math.floor(rectangleWidth *
            (1 - CONFIG.percentRectPadding));
        interRectanglePadding = Math.floor(rectangleWidth *
            CONFIG.percentRectPadding);
        sidePadding = (canvas.width - rectangleWidth * CONFIG.numberOfItems -
            interRectanglePadding * (CONFIG.numberOfItems - 1)) / 2;
        drawGrid();
    };

    // Render a single frame of the animation
    drawObj.render = function render(stateObj) {
        var i,      // generic loop index
            length, // generic loop length
            rectArray;  // color array

        // Clear the canvas and draw a grid
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();

        rectArray = stateObj.values.map(function (value, index) {
            if (index === stateObj.changes.value.high) {
                return CONFIG.regionBorderColor;
            } else if (index === stateObj.changes.value.low) {
                return CONFIG.regionBorderColor;
            } else if (index === stateObj.changes.value.important) {
                return CONFIG.importantColor;
            } else if (index === stateObj.changes.value.target) {
                return CONFIG.targetColor;
            }
            return CONFIG.rectColor;
        });

        for (i = 0, length = CONFIG.numberOfItems; i < length; i += 1) {
            drawBoxRounded(i, stateObj.values[i], rectArray[i]);
        }

        canvasContext.fillStyle = CONFIG.textColor;
        canvasContext.font = CONFIG.textFont;
        canvasContext.fillText('Comparisons: ' + stateObj.changes.value.comparisons, 25, 25);
    };

    // Draw a rounded box with specified index, value (height), and color
    function drawBoxRounded(index, value, color) {
        var xPos,       // X position of the bottom left corner
            yPos,       // Y position of the bottom left corner
            height,     // calculated height of the rectangle
            corner = CONFIG.cornerRadius;   // radius of the rounded corners

        // calculate height and positioning
        xPos = sidePadding + index * (rectangleWidth + interRectanglePadding);
        yPos = canvas.height - CONFIG.minimumPadding;
        height = Math.floor((canvas.height - rectangleWidth) * ((value / CONFIG.numberOfItems)) + rectangleWidth);

        // draw a rounded rectangle
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.moveTo(xPos + corner, yPos);
        canvasContext.lineTo(xPos + rectangleWidth - corner, yPos);
        canvasContext.quadraticCurveTo(xPos + rectangleWidth, yPos,
            xPos + rectangleWidth, yPos - corner);
        canvasContext.lineTo(xPos + rectangleWidth, yPos + corner - height);
        canvasContext.quadraticCurveTo(xPos + rectangleWidth, yPos - height,
            xPos + rectangleWidth - corner, yPos - height);
        canvasContext.lineTo(xPos + corner, yPos - height);
        canvasContext.quadraticCurveTo(xPos, yPos - height,
            xPos, yPos - height + corner);
        canvasContext.lineTo(xPos, yPos - corner);
        canvasContext.quadraticCurveTo(xPos, yPos, xPos + corner, yPos);
        canvasContext.closePath();
        canvasContext.fill();
    }

    // Draw a basic grid on the canvas
    function drawGrid() {
        var i,      // generic loop index
            length; // generic loop length

        canvasContext.strokeStyle = CONFIG.gridColor;

        canvasContext.beginPath();
        for (i = 0, length = canvas.width; i <= length; i += CONFIG.gridLineSpacing) {
            canvasContext.moveTo(i, 0);
            canvasContext.lineTo(i, canvas.height);
        }
        canvasContext.stroke();
        canvasContext.beginPath();
        for (i = 0, length = canvas.height; i <= length; i += CONFIG.gridLineSpacing) {
            canvasContext.moveTo(0, i);
            canvasContext.lineTo(canvas.width, i);
        }
        canvasContext.stroke();
    }

    return drawObj;
}();
