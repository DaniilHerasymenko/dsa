// Черга. Big O = O(1)
class Queue{
    constructor(){
        this.collection = []
    }
    //метод виводу черги
    print = () => console.log(this.collection);
    //метод додавання елементу (в кінець)
    enqueue = (element) => this.collection.push(element);
    //метод видалення елементу (першого)
    dequeue = () => this.collection.shift();
    //метод виводу першого елемента
    front = () => this.collection[0];
    //метод перевіркина наявність елементів
    isEmpty = () => this.collection.length === 0;
    //метод визначення розміру черги
    size = () => this.collection.length;
}
// Створення черги
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
console.log(queue.front());
queue.dequeue();
console.log(queue.isEmpty());
queue.print();