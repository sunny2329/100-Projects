let btns = document.querySelectorAll('.btn');
let display = document.querySelector("input");


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


let str = "";

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let r = btn.innerText;

        if (r == "=") {
            // console.log(str);
            try {
                display.value = eval(str);
            } catch (e) {
                display.value = "Invalid Expression";
            }

            str = display.value;

        } else if (r == "C") {
            str = "";
            display.value = str;
        }
        else {
            str += r;
            display.value = str;
        }

    })
})






