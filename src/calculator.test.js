/**
 * Tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including division-by-zero error handling)
 *   - Modulo (including modulo-by-zero error handling)
 *   - Power / Exponentiation
 *   - Square Root (including negative number error handling)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("./calculator");

// ── Addition ──────────────────────────────────────────────────────────────────
describe("Addition", () => {
  test("adds two positive numbers", () => expect(add(5, 3)).toBe(8));
  test("adds a positive and a negative number", () => expect(add(10, -4)).toBe(6));
  test("adds two negative numbers", () => expect(add(-2, -3)).toBe(-5));
  test("adds zero to a number", () => expect(add(7, 0)).toBe(7));
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe("Subtraction", () => {
  test("subtracts two positive numbers", () => expect(subtract(9, 4)).toBe(5));
  test("subtracts a larger from a smaller number", () => expect(subtract(3, 10)).toBe(-7));
  test("subtracts zero from a number", () => expect(subtract(5, 0)).toBe(5));
  test("subtracts a negative number", () => expect(subtract(5, -3)).toBe(8));
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe("Multiplication", () => {
  test("multiplies two positive numbers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));
  test("multiplies a positive and a negative number", () => expect(multiply(4, -3)).toBe(-12));
  test("multiplies two negative numbers", () => expect(multiply(-3, -3)).toBe(9));
});

// ── Division ──────────────────────────────────────────────────────────────────
describe("Division", () => {
  test("divides two positive numbers", () => expect(divide(10, 2)).toBe(5));
  test("divides resulting in a decimal", () => expect(divide(7, 2)).toBe(3.5));
  test("divides a negative number", () => expect(divide(-9, 3)).toBe(-3));
  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});

// ── Modulo ────────────────────────────────────────────────────────────────────
describe("Modulo", () => {
  test("returns remainder of 5 % 2", () => expect(modulo(5, 2)).toBe(1));
  test("returns remainder of 10 % 3", () => expect(modulo(10, 3)).toBe(1));
  test("returns 0 when evenly divisible", () => expect(modulo(8, 4)).toBe(0));
  test("works with negative dividend", () => expect(modulo(-7, 3)).toBe(-1));
  test("throws on modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed");
  });
});

// ── Power / Exponentiation ────────────────────────────────────────────────────
describe("Power", () => {
  test("returns 2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));
  test("returns base raised to exponent 0 equals 1", () => expect(power(5, 0)).toBe(1));
  test("returns base raised to exponent 1 equals base", () => expect(power(7, 1)).toBe(7));
  test("returns fractional exponent (square root via power)", () => expect(power(9, 0.5)).toBe(3));
  test("returns negative base to even exponent", () => expect(power(-2, 4)).toBe(16));
  test("returns negative base to odd exponent", () => expect(power(-2, 3)).toBe(-8));
});

// ── Square Root ───────────────────────────────────────────────────────────────
describe("Square Root", () => {
  test("returns square root of 16 = 4", () => expect(squareRoot(16)).toBe(4));
  test("returns square root of 25 = 5", () => expect(squareRoot(25)).toBe(5));
  test("returns square root of 2 (irrational)", () => expect(squareRoot(2)).toBeCloseTo(1.4142, 4));
  test("returns 0 for square root of 0", () => expect(squareRoot(0)).toBe(0));
  test("returns 1 for square root of 1", () => expect(squareRoot(1)).toBe(1));
  test("throws for square root of a negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed");
  });
  test("throws for square root of -1", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed");
  });
});
