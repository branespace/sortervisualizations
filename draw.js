var draw = (function(){
    "use strict";

    var drawObj = {};

    var numberOfLines = 10;
    var minimumPadding = 20;
    var percentRectPadding = 0.20;

    var canvas = document.getElementById('drawfield');
    var ctx = canvas.getContext('2d');
    var rectWidth = Math.floor((canvas.width - minimumPadding * 2) / (numberOfLines));
    rectWidth = Math.floor(rectWidth * (1 - percentRectPadding));
    var rectPad = Math.floor(rectWidth * percentRectPadding);
    var actualPadding = (canvas.width - rectWidth * numberOfLines - rectPad * (numberOfLines - 1)) / 2;


    ctx.fillStyle = 'white';

    drawObj.render = function(){
        var xpos;
        var ypos;
        var height;
        for(var i = 0; i < numberOfLines; i += 1){
            xpos = actualPadding + i * (rectWidth + rectPad);
            ypos = canvas.height - minimumPadding;
            height = Math.floor((canvas.height - rectWidth) * (i / numberOfLines)) + rectWidth;
            ctx.fillRect(xpos, ypos, rectWidth, 0 - height);
         }
    };

    return drawObj;
})();

draw.render();