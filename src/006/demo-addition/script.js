// Create our own Math functions for two numbers
const addNumbers = function (firstParam, secondParam) {
    let result = 0;
    result = result + parseFloat(firstParam);
    result += parseFloat(secondParam);
    return result;
}
const multiplyNumbers = function (firstParam, secondParam) {
    return parseFloat(firstParam) * parseFloat(secondParam);
}
const subtractNumbers = function (firstParam, secondParam) {
    return parseFloat(firstParam) - parseFloat(secondParam);
}
const divideNumbers = function (firstParam, secondParam) {
    return parseFloat(firstParam) / parseFloat(secondParam);
}

const setUp = function() {
    // Ask for two numbers, and put them inside the <output> elements
    let first = prompt('Enter a number.');
    let second = prompt('Enter another number.');
    firstNumber.innerText = first;
    secondNumber.innerText = second;
}

const showAnswer = function(result) {
    answer.innerText = result;
}

const doMath = function(title, symbol, mathFunction) {
    operation.innerText = title;
    operator.innerText = symbol;
    let result = mathFunction(firstNumber.innerText, secondNumber.innerText);
    showAnswer(result);
}
// Add in the code from the walk-through and observe the page behaviour.

// ensure that I have a numeric data type
// first = parseFloat(first);
// second = parseFloat(second);

// let result = first + second;

// alert(`I calculated a result of ${result} when adding the numbers.`);


// answer.innerText = result;

// let repeat = confirm('Again?');

// let para = document.querySelector('p'); // grab the first <p>
// para.innerHTML = repeat ? 'Press <a href="#">this link</a> to try again.' : 'Thanks for playing';