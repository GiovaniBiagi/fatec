/**
 * Grupo:
 *
 * Giovani
 * Graziella
 * Hosana
 */

import { Stack } from "../stack/index.js";

export class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

export const invertedQueue = () => {
  const stack = new Stack();
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  while (stack.size() > 0) {
    queue.enqueue(stack.pop());
  }

  return queue;
};

console.log("INVERTED QUEUE", invertedQueue());

const queue = new Queue();
queue.enqueue("Giovani");
queue.enqueue("Hosana");
queue.enqueue("Graziella");

console.log(queue.size()); // 3
console.log(queue.peek()); // Giovani
console.log(queue.dequeue()); // Giovani
console.log(queue.dequeue()); // Hosana
console.log(queue.dequeue()); // Graziella
console.log(queue.isEmpty()); // true
