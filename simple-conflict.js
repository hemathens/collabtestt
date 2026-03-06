// Simple conflict test file - Feature A version
function greet(name) {
    return "Hello, " + name + "!";
}

function calculate(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

const version = "1.1.0";
const author = "Feature A Team";

module.exports = { greet, calculate, multiply, version, author };
