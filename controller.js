// controller.js
// Provides initialization and event handlers

// Handles setup operations for the event handlers and elements
function setup() {
    "use strict";

    var startButton = document.getElementById('start'),
        restartButton = document.getElementById('restart'),
        pauseButton = document.getElementById('pause'),
        resetButton = document.getElementById('reset'),
        algorithmSelect = document.getElementById('algorithm'),
        timeStepInput = document.getElementById('timestep'),
        numberItemsInput = document.getElementById('numberitems'),
        i,      //Generic loop index
        length; //Loop length cache

    startButton.addEventListener('click', function start(event) {
        event.stopPropagation();
        pauseButton.textContent = 'Pause';
        var newConfigValidated = setValues();
        if (newConfigValidated) {
            APP.beginAnimate();
        }
    });

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            if(pauseButton.style.visibility === 'hidden') {
                startButton.click();
            } else {
                pauseButton.click();
            }
        }
    });

    restartButton.addEventListener('click', function restart(event) {
        event.stopPropagation();
        pauseButton.textContent = 'Pause';
        APP.stopAnimate();
        APP.beginAnimate();
    });

    pauseButton.style.visibility = 'hidden';

    pauseButton.addEventListener('click', function pause(event) {
        event.stopPropagation();
        if (pauseButton.textContent === 'Pause') {
            APP.stopAnimate();
            pauseButton.textContent = 'Unpause';
        } else {
            APP.continueAnimate();
            pauseButton.textContent = 'Pause';
        }
    });

    resetButton.addEventListener('click', function reset(event) {
        event.stopPropagation();
        algorithmSelect.selectedIndex = 0;
        timeStepInput.value = CONFIG.defaultTimeStep;
        numberItemsInput.value = CONFIG.numberOfItemsDefault;
    });

    // Comparator to a-z increasing sort sorting algorithms
    SORTERS.sort(function sortAlgorithms(algorithmA, algorithmB) {
        if (algorithmA.name < algorithmB.name) {
            return -1;
        }
        if (algorithmA.name > algorithmB.name) {
            return 1;
        }
        return 0;
    });

    // Remove default entry and propagate configuration input form
    algorithmSelect.remove(0);
    for (i = 0, length = SORTERS.length; i < length; i += 1) {
        var newOption = document.createElement('option');
        newOption.value = i;
        newOption.text = SORTERS[i].name;
        algorithmSelect.add(newOption);
    }
    algorithmSelect.selectedIndex = 0;
    timeStepInput.value = CONFIG.timeStep;
    numberItemsInput.value = CONFIG.numberOfItems;

    // Initialize drawing subsystem
    APP.startGrid();

    // Validates configuration data and stores it for use.
    function setValues() {
        CONFIG.sorter = SORTERS[algorithmSelect.options[
            algorithmSelect.selectedIndex].value];
        var numItems = parseInt(numberItemsInput.value);
        if (numItems > 200 || numItems < 5) {
            window.alert('Number of items must be between 5 and 200');
            return false;
        } else {
            CONFIG.numberOfItems = parseInt(numItems);
        }
        var animationTimeStep = parseInt(timeStepInput.value);
        if (animationTimeStep <= 20) {
            window.alert('Time Step must be greater than 20 ms');
            return false;
        } else {
            CONFIG.timeStep = animationTimeStep;
        }
        return true;
    }
}

window.onload = function () {
    "use strict";
    setup();
};