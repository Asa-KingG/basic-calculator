const num1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter choice: +, -, /, ., *, %");
const num2 = parseFloat(prompt("Enter second number: "));



let result;


if (operator == '+') {
    result = num1 + num2;

} else if (operator == '-') {
    result = num1 - num2;

} else if (operator == '*') {
    result = num1 * num2;

} else if (operator == '/') {
    result = num1 / num2;

} else if (operator == '%') {
    result = num1 % num2;

} else if (operator == '.') {
    result = num1.num2;

}
alert(result);
