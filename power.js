/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

        */

let flight = document.querySelector("#flight")

let flightFunction = () => {
    flight.classList.remove("disabled");
    flight.classList.add("enabled");
}

document.querySelector("#activate-flight").addEventListener("click", flightFunction)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

let mindreading = document.querySelector("#mindreading")

let mindFunction = () => {
    mindreading.classList.remove("disabled");
    mindreading.classList.add("enabled");
}

document.querySelector("#activate-mindreading").addEventListener("click", mindFunction)


let xray = document.querySelector("#xray")

let xrayFunction = () => {
    xray.classList.remove("disabled");
    xray.classList.add("enabled");
}

document.querySelector("#activate-xray").addEventListener("click", xrayFunction)


/*
Write two more event handlers for activating and deactivating all powers
when the corresponding buttons are clicked. You will need to use the
`document.querySelectorAll()` method for these.
*/

let allDisabled = document.querySelectorAll(".disabled");

let enableAll = () => {
    for (let i = 0; i < allDisabled.length; i++) {
        allDisabled[i].classList.toggle("enabled");
        //allDisabled[i].classList.remove("disabled");
    }

}

document.getElementById("activate-all").addEventListener("click", enableAll);


let allEnabled = document.querySelectorAll(".enabled");

let disableAll = () => {
    for (let i = 0; i < allEnabled.length; i++) {
        allEnabled[i].classList.toggle("disabled");
        //allEnabled[i].classList.remove("enabled");
    }

}

document.getElementById("deactivate-all").addEventListener("click", disableAll);







