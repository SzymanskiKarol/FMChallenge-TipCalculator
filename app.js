let billInput = document.getElementById("bill");
let customInput = document.getElementById("custom");
let peopleInput = document.getElementById("people");
let resetBtn = document.querySelector(".reset");
let tipPerPerson = document.getElementById("tip-pp");
let totalPerPerson = document.getElementById("total-pp");

let billValue = 0;
let peopleValue = 1;
let tipValue = 0;
let totalAmount = 0;
let tipAmount = 0;

// DIABLED RESET BUTTON IF BILL EMPTY
billInput.addEventListener("keyup", () => {
    let isEmpty = false;
    if (billInput.value.length == 0) {
        isEmpty = true;
    } else {
        isEmpty = false;
    }
    if (isEmpty) {
        resetBtn.setAttribute('disabled', 'disabled');
    } else {
        resetBtn.removeAttribute('disabled');
    }
})

// PICK TIP %

const buttons = document.querySelectorAll(".tip-choose");
buttons.forEach(button =>
    button.addEventListener("focus", () => {
        buttons.forEach((i) => {
            i.classList.remove("active")
        })
        button.classList.add("active");
        if (document.querySelector(".active").classList.contains("btn")) {
            tipValue = parseFloat(document.querySelector(".active").innerText);
        } else {
            tipValue = parseFloat(document.querySelector(".active").value);
        }
        renderResult()
    })
)


function renderResult() {
    tipAmount = (billValue * tipValue / 100) / peopleValue || 0;
    totalAmount = (billValue / peopleValue) + tipAmount || 0;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2) || 0;
    totalPerPerson.innerHTML = "$" + totalAmount.toFixed(2) || 0;
}

// Calculated
document.addEventListener("keyup", () => {
    renderResult()
})

billInput.addEventListener("input", () => {
    billValue = parseFloat(billInput.value);
})

peopleInput.addEventListener("input", () => {
    peopleValue = parseFloat(peopleInput.value);
})

customInput.addEventListener("input", () => {
    if (customInput.classList.contains("active")) {
        tipValue = parseFloat(document.querySelector(".active").value);
    }
})

function resetAll() {
    resetBtn.setAttribute("disabled", "disabled")
    tipPerPerson.innerHTML = "$0.00";
    totalPerPerson.innerHTML = "$0.00";
    billInput.value = "";
    peopleInput.value = 1;
    customInput.value = "";
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
}