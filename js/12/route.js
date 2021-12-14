class Route {

    constructor(start) {
        this.start = start;
        this.steps = '';
    }
}


class Node {

    constructor(name) {
        this.name = name;   // the name of this node
        this.edges = []     // array of places we can get to from this node
        this.isTerminus = (name == 'start' || name == 'end');
        this.isBig = (!this.isTerminus && name == name.toUpperCase());
        this.visited = false;
    }

    addEdge (edge) {
        this.edges.push(edge);
    }

    visit() {
        if (!this.isBig) {
            this.visited = true;
        }
    }
}