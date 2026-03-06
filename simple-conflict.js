// Simple conflict test file - Feature B version
function greet(name) {
    return "Hi there, " + name + "!!!";
}

function calculate(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
}

const version = "1.2.0";
const author = "Feature B Team";
const license = "MIT";

module.exports = { greet, calculate, subtract, divide, version, author, license };
