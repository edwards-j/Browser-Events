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

//Selects all elements with class of "power" and stores it in the variable power
let powers = document.querySelectorAll(".power")

//Function that adds the enabled class to items in powers
let enableAll = () => {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.add("enabled");
        powers[i].classList.remove("disabled");
    }
}

//Creates click event listen for the "activate all" button to enable all powers
document.getElementById("activate-all").addEventListener("click", enableAll);

//Function that adds the disabled class to items in powers
let disableAll = () => {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.add("disabled");
        powers[i].classList.remove("enabled");
    }
}
//Creates click event listen for the "deactivate all" button to enable all powers
document.getElementById("deactivate-all").addEventListener("click", disableAll);




