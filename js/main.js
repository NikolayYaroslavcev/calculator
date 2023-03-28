const display = document.querySelector('.js-display')
const btnsCalculator = document.querySelectorAll('.js-btn-calculator')
const btns = document.querySelectorAll('.js-btn')


btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;

        if (itemText === "x") {
            itemText = '*'
        }

        if (itemText === "÷") {
            itemText = '/'
        }
        if (itemText === "AC") {
            display.value = '';
        }
        if (itemText === "C") {
            display.value = display.value.slice(0, -1);
        }
        if (itemText !== "C" && itemText !== "AC" && itemText !== "=") {
            display.value += itemText;
        }
        if (itemText === "=") {
            display.value = eval(display.value);
        }

        console.log(itemText)
    })
})


const sin = () => {
    display.value = Math.sin(display.value);
}
const cos = () => {
    display.value = Math.cos(display.value);
}
const tan = () => {
    display.value = Math.tan(display.value);
}
const pow = () => {
    display.value = Math.pow(display.value, 2);
}
const sqrt = () => {
    display.value = Math.sqrt(display.value, 2);
}


btnsCalculator.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;

        if (itemText === "sin") {
            sin()
        }
        if (itemText === "cos") {
            cos()
        }
        if (itemText === "tan") {
            tan()
        }
        if (itemText === "x2") {
            pow()
        }
        if (itemText === "√") {
            sqrt()
        }
        console.log(itemText)
    })
})

