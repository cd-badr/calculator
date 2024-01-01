let myInput = document.querySelector('input')
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal')
let numbers = document.querySelectorAll(".number, .op");
let deletee = document.querySelector('.delete');
let result = "";
let freeze = "";

deletee.addEventListener('click', deleteBTN);
function deleteBTN() {
    myInput.value = myInput.value.slice(0, -1)
}

clear.addEventListener('click', clearResult);
function clearResult() {
    freeze = false;
    result = "";
    myInput.value = "0"
}

numbers.forEach((e) => {
    e.addEventListener('click', numberBTN)
})

function numberBTN(e) {

    if (freeze) {
        e.preventDefault()

        return;
    }
    const value = e.target.value;
    if (myInput.value === 0 && value === 0) {
        return;
    }

    if (result.length === 0) {
        myInput.value = ""
    }
    const operators = [`/`, `*`, `+`, `-`];

    if (operators.includes(result[result.length - 1]) && operators.includes(value)) {
        myInput.value = myInput.value.replace(/.$/, value);
        result.value = myInput.value.replace(/.$/, value);

        return;
    }

    result += value;
    myInput.value += value;
}

equal.addEventListener('click', calculateResult)

function calculateResult() {
    try {
        myInput.value = eval(result)
        freeze = true;
    } catch (e) {
        myInput.value = "ERROR"
    }
}