class Graph {
    constructor() {
        this.adjacencyList = {};
    }
// додаваннв Вершини
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
// додавання ребра
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
// BFS пошук
    bfs(startingNode) {
        const queue = [startingNode];
        const visited = {};
        visited[startingNode] = true;
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);
            for (let neighbor of this.adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}
// приклад роботи
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

graph.bfs("A");