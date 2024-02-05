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
// DFS пошук
    dfs(startingNode) {
        const visited = {};
        const dfsRealization = (vertex) => {
            visited[vertex] = true;
            console.log(vertex);
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfsRealization(neighbor);
                }
            }
        };
        dfsRealization(startingNode);
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

graph.dfs("A");