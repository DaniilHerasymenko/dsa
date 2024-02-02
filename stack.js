// Стек. Big O = O(1)
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    //метод додавання елементу (в кінець)
    push = (value) => {
        if (value !== undefined) {
            this.storage[this.count] = value;
            this.count++;
        }
    }
    //метод видалення елементу (останнього)
    pop = () => {
        if (this.count === 0) return undefined;
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    //метод виводу останнього елементу
    peek = () => this.count === 0 ? null : this.storage[this.count - 1];
    //метод визначення довжини масиву
    size = () => this.count;
}
//Створення стеку
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());