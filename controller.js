var startButton = document.getElementById('start');
var restartButton = document.getElementById('restart');
var pauseButton = document.getElementById('pause');

startButton.addEventListener('click', function (event) {
    "use strict";

    event.stopPropagation();
    pauseButton.textContent = 'Pause';
    APP.beginAnimate();
});

restartButton.addEventListener('click', function (event) {
    "use strict";

    event.stopPropagation();
    pauseButton.textContent = 'Pause';
    APP.stopAnimate();
    APP.beginAnimate();
});

pauseButton.addEventListener('click', function (event) {
    "use strict";

    event.stopPropagation();
    if (pauseButton.textContent === 'Pause') {
        APP.stopAnimate();
        pauseButton.textContent = 'Unpause';
    } else {
        APP.continueAnimate();
        pauseButton.textContent = 'Pause';
    }
});
