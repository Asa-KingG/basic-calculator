const num1 = window.prompt("Enter first number: ");
const operator = window.prompt("Enter choice: +, -, /, ., *, %");
const num2 = window.prompt("Enter second number: ");
const result = window.prompt();

num1 = parseFloat(num1);
num2 = parseFloat(num2);
operator = ["+", "-", "*", "/", "%", "."];
result = parseFloat(result);


if (operator == '+') {
    result = num1 + num2;
    window.prompt(result);
} else if (operator == '-') {
    result = num1 - num2;
    window.prompt(result);
} else if (operator == '*') {
    result = num1 * num2;
    window.prompt(result);
} else if (operator == '/') {
    result = num1 / num2;
    window.prompt(result);
} else if (operator == '%') {
    result = num1 % num2;
    window.prompt(result);
} else if (operator == '.') {
    result = num1 . num2;
    window.prompt(result);
} 
// window.prompt(
//console.log('${num1} ${operator} ${num2} = ${result})'
//);