function setup() {
    "use strict";

    var startButton = document.getElementById('start');
    var restartButton = document.getElementById('restart');
    var pauseButton = document.getElementById('pause');
    var resetButton = document.getElementById('reset');
    var algoSelect = document.getElementById('algorithm');
    var timeStep = document.getElementById('timestep');
    var numberItems = document.getElementById('numberitems');
    var i;

    startButton.addEventListener('click', function (event) {
        event.stopPropagation();
        pauseButton.textContent = 'Pause';
        var result = setValues();
        if (result) {
            APP.beginAnimate();
        }
    });

    restartButton.addEventListener('click', function (event) {
        event.stopPropagation();
        pauseButton.textContent = 'Pause';
        APP.stopAnimate();
        APP.beginAnimate();
    });

    pauseButton.addEventListener('click', function (event) {
        event.stopPropagation();
        if (pauseButton.textContent === 'Pause') {
            APP.stopAnimate();
            pauseButton.textContent = 'Unpause';
        } else {
            APP.continueAnimate();
            pauseButton.textContent = 'Pause';
        }
    });

    resetButton.addEventListener('click', function (event) {
        event.stopPropagation();
        algoSelect.selectedIndex = 0;
        timeStep.value = CONFIG.defaultTimeStep;
        numberItems.value = CONFIG.defaultArraySize;
    });

    SORTERS.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    algoSelect.remove(0);
    for (i = 0; i < SORTERS.length; i += 1) {
        var option = document.createElement( 'option' );
        option.value = i;
        option.text = SORTERS[i].name;
        algoSelect.add( option );
    }
    algoSelect.selectedIndex = 0;
    timeStep.value = CONFIG.timeStep;
    numberItems.value = CONFIG.arraySize;

    APP.startGrid();

    function setValues(){
        CONFIG.sorter = SORTERS[algoSelect.options[algoSelect.selectedIndex].value];
        var numItems = parseInt(numberItems.value);
        if(numItems > 200 || numItems < 10){
            window.alert('Number of items must be between 10 and 200');
            return false;
        } else {
            CONFIG.arraySize = parseInt(numItems);
        }
        var animTimeStep = parseInt(timeStep.value);
        if(animTimeStep <= 20){
            window.alert('Time Step must be greater than 20 ms');
            return false;
        } else {
            CONFIG.timeStep = animTimeStep;
        }
        return true;
    }
}

window.onload = function(){
    "use strict";
    setup();
};