// =====================================================
// CODEVDA INTERNSHIP - TASK 3
// BASIC DOM MANIPULATION
// =====================================================


// ===============================
// COUNTER STATE
// ===============================

let count = 0;


// ===============================
// DOM ELEMENTS
// ===============================

const countDisplay =
    document.getElementById("count");

const incrementButton =
    document.getElementById("incrementBtn");

const decrementButton =
    document.getElementById("decrementBtn");

const resetButton =
    document.getElementById("resetBtn");

const statusMessage =
    document.getElementById("status");


// ===============================
// UPDATE DOM
// ===============================

function updateDisplay() {

    // Dynamically update the DOM

    countDisplay.textContent = count;


    // Prevent decrementing below zero

    if (count === 0) {

        decrementButton.disabled = true;

    } else {

        decrementButton.disabled = false;

    }


    // Update status message

    if (count === 0) {

        statusMessage.textContent =
            "Ready to count";

    } else if (count === 1) {

        statusMessage.textContent =
            "You have counted once";

    } else {

        statusMessage.textContent =
            `Current count: ${count}`;
    }


    // Add animation

    countDisplay.classList.remove("change");


    // Force browser to restart animation

    void countDisplay.offsetWidth;


    countDisplay.classList.add("change");

}


// ===============================
// INCREMENT
// ===============================

incrementButton.addEventListener(
    "click",
    function () {

        count++;

        updateDisplay();

    }
);


// ===============================
// DECREMENT
// ===============================

decrementButton.addEventListener(
    "click",
    function () {

        // Make sure count never goes below zero

        if (count > 0) {

            count--;

            updateDisplay();

        }

    }
);


// ===============================
// RESET
// ===============================

resetButton.addEventListener(
    "click",
    function () {

        count = 0;

        updateDisplay();

    }
);


// ===============================
// INITIAL DISPLAY
// ===============================

updateDisplay();