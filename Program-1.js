class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
  }

  subtract(a, b) {
    this.result = a - b;
  }

  multiply(a, b) {
    this.result = a * b;
  }

  divide(a, b) {
    if (b !== 0) {
      this.result = a / b;
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
  }
}


const a = parseFloat(prompt("Enter the first number:"));
const b = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (add, subtract, multiply, divide):");


const calculator = new Calculator();


switch (operation) {
  case "add":
    calculator.add(a, b);
    console.log(`Result: ${calculator.result}`);
    break;
  case "subtract":
    calculator.subtract(a, b);
    console.log(`Result: ${calculator.result}`);
    break;
  case "multiply":
    calculator.multiply(a, b);
    console.log(`Result: ${calculator.result}`);
    break;
  case "divide":
    calculator.divide(a, b);
    console.log(`Result: ${calculator.result}`);
    break;
  default:
    console.log("Invalid operation.");
    break;
}