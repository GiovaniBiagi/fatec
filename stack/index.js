/**
 * Integrantes do grupo:
 *
 * Giovani
 * Hosana
 * Graziella
 */

export class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

export function decimalParaBinario(decimalNumber) {
  const stack = new Stack();
  let number = decimalNumber;
  let binaryString = "";

  while (number > 0) {
    const remainder = Math.floor(number % 2);
    stack.push(remainder);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}

// console.log(decimalParaBinario(10)); // 1010
// console.log(decimalParaBinario(233)); // 11101001
// console.log(decimalParaBinario(1000)); // 1111101000
// console.log(decimalParaBinario(0)); // ""
// console.log(decimalParaBinario(1)); // "1"
