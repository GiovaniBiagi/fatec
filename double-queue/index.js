/**
 * Grupo:
 *
 * Giovani
 * Graziella
 * Hosana
 */

export class DoubleQueue {
  constructor() {
    this.queue = [];
  }

  addFront(value) {
    this.queue.unshift(value);
  }

  addBack(value) {
    this.queue.push(value);
  }

  removeFront() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue.shift();
  }

  removeBack() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue.pop();
  }

  peekFront() {
    return this.queue[0];
  }

  peekBack() {
    if (this.isEmpty()) {
      return;
    }

    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

const doubleQueue = new DoubleQueue();
doubleQueue.addFront("Giovani");
doubleQueue.addFront("Hosana");
doubleQueue.addBack("Graziella");

console.log(doubleQueue.queue);
console.log(doubleQueue.size()); // 3
console.log(doubleQueue.peekFront()); // Hosana
console.log(doubleQueue.peekBack()); // Graziella
console.log(doubleQueue.removeFront()); // Hosana
console.log(doubleQueue.removeBack()); // Graziella
console.log(doubleQueue.removeFront()); // Giovani
console.log(doubleQueue.isEmpty()); // true
