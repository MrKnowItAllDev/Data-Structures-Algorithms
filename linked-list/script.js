class Node {
    constructor(val = null, nextNode = null) {
        this.value = val;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    #listSize = 0
    constructor() {
        this.root = null;
        this.next = null;
    }

    append(val) {

        if (!this.root) {
            this.next = this.root = new Node(val);
            this.#listSize++;
            return;
        }
        this.next.nextNode = new Node(val);
        this.next = this.next.nextNode;
        this.#listSize++;
    }

    prepend(val) {
        if (!this.root) {
            this.next = this.root = new Node(val);

            this.#listSize++;
            return;
        }
        // The current root should be "pushed" to the next node
        // Make new root the new node

        this.#listSize++;
    }

    size = () => this.#listSize;
    head = () => this.root;
    tail = () => this.next;

    at(index) {
        let idx = 0;
        let rootNode = this.root;
        while (rootNode !== null) {
            if (idx === index) return rootNode;
            rootNode = rootNode.nextNode;
            idx++;
        }
        return null;
    }

    pop() {
        if (!this.root) return null;

        let node = this.root;
        let removed;

        while (node.nextNode !== null) {
            if (node.nextNode.nextNode === null) {
                removed = node.nextNode;
                node.nextNode = null;
                this.#listSize--;
                return;
            }
            node = node.nextNode;
        }
        return null;
    }

    getNodes() {
        let node = this.root;
        const nodes = [];
        while (node !== null) {
            nodes.push(node);
            node = node.nextNode;
        }
        return nodes;
    }

    contains(val) {
        let rootNode = this.root;
        while (rootNode !== null) {
            if (rootNode.value === val)
                return true;
            rootNode = rootNode.nextNode;
        }
        return false;
    }

    find(val) { }

    toString() {
        let node = this.root;
        const stringArr = [];
        while (node !== null) {
            stringArr.push(node.value);
            node = node.nextNode;
            if (!node) stringArr.push(node);
        }
        return stringArr.map((n) => {
            if (n) return `( ${n} )`;
            return `null`;
        }).join(' -> ');
    }

    insertAt(index, val) { }

    removeAt(index) { }
}