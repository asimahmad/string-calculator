import { add } from './utils/calculator';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns the sum of multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('handles new lines between numbers', () => {
  expect(add("1\n2,4")).toBe(7);
});

test('supports different delimiters', () => {
  expect(add("//;\n1;5")).toBe(6);
});

test('throws an exception for negative numbers', () => {
  expect(() => add("1,-2")).toThrow('negative numbers not allowed: -2');
});

test('shows all negative numbers in exception message', () => {
  expect(() => add("1,-2,-3")).toThrow('negative numbers not allowed: -2,-3');
});
