/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
/*function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let addNumber1 = Number(parseFloat(document.querySelector('#add1')).value) || 0;
    let addNumber2 = Number(parseFloat(document.querySelector('#add2')).value) || 0;

    const sum = add(number1, number2);

    document.getElementById('#sum').textContent = sum;
    document.getElementById('#addNumbers').addEventListener('click', addNumbers);

}*/
function add(number1, number2) {

    return number1 + number2;
}

function addNumbers() {
    // Get the values of the HTML form controls with IDs add1 and add2
    let addNumber1 = parseFloat(document.getElementById('add1').value);
    let addNumber2 = parseFloat(document.getElementById('add2').value);

    let sum = add(addNumber1, addNumber2);

    document.getElementById('sum').value = sum;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = parseFloat(document.getElementById('subtract1').value);
    let subtract2 = parseFloat(document.getElementById('subtract2').value);

    let difference = subtract(subtract1, subtract2);

    document.getElementById('difference').value = difference;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (x, y) => x * y;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);

    let product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);

    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
}
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */

function getTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;
    }

    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = `${numbersArray}`;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number *2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => 91 *2);