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
        let tmp = this.root;
        this.root = new Node(val);
        this.root.nextNode = tmp;
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

    insertAt(index, val) {
        let idx = 0;
        let tmp;
        let node = this.root;
        while (node !== null) {
            if (idx === (index - 1)) {
                tmp = node.nextNode;
                node.nextNode = new Node(val);
                node.nextNode.nextNode = tmp;
            }
            node = node.nextNode;
            idx++;
        }
        this.#listSize++;
    }

    removeAt(index) {
        this.#listSize--;
    }
}


const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// linkedList.insertAt(2, 45);
linkedList.prepend(76);
linkedList.prepend(100);
console.log(linkedList.toString());