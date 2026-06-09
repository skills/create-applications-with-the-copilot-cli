/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        – Addition: returns the sum of two numbers
 *   subtract   – Subtraction: returns the difference between two numbers
 *   multiply   – Multiplication: returns the product of two numbers
 *   divide     – Division: returns the quotient of two numbers (division by zero not allowed)
 *   modulo     – Modulo: returns the remainder of a divided by b
 *   power      – Exponentiation: returns base raised to the exponent
 *   squareRoot – Square Root: returns the square root of n (negative numbers not allowed)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3           => 8
 *   node calculator.js subtract 9 4      => 5
 *   node calculator.js multiply 6 7      => 42
 *   node calculator.js divide 10 2       => 5
 *   node calculator.js modulo 10 3       => 1
 *   node calculator.js power 2 8         => 256
 *   node calculator.js squareRoot 25     => 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns a divided by b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error("Modulo by zero is not allowed");
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error("Square root of a negative number is not allowed");
  return Math.sqrt(n);
}

// Validate that a value is a finite number
function parseOperand(value) {
  const num = Number(value);
  if (isNaN(num) || !isFinite(num)) {
    throw new Error(`Invalid operand: "${value}" is not a valid number`);
  }
  return num;
}

// Export functions for use in tests and other modules
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point — only runs when executed directly
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  const twoOperandOps = ["add", "subtract", "multiply", "divide", "modulo", "power"];
  const oneOperandOps = ["squareRoot"];
  const validOps = [...twoOperandOps, ...oneOperandOps];

  if (!operation || !validOps.includes(operation)) {
    console.error(`Usage: node calculator.js <operation> <num1> [num2]`);
    console.error(`Operations: ${validOps.join(", ")}`);
    process.exit(1);
  }

  try {
    if (oneOperandOps.includes(operation)) {
      if (arg1 === undefined) {
        console.error("Error: One numeric operand is required.");
        process.exit(1);
      }
      const a = parseOperand(arg1);
      const operations = { squareRoot };
      console.log(operations[operation](a));
    } else {
      if (arg1 === undefined || arg2 === undefined) {
        console.error("Error: Two numeric operands are required.");
        process.exit(1);
      }
      const a = parseOperand(arg1);
      const b = parseOperand(arg2);
      const operations = { add, subtract, multiply, divide, modulo, power };
      console.log(operations[operation](a, b));
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
