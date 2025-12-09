class Node {
    constructor(val = null, nextNode = null) {
        this.value = val;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    listSize = 0;
    constructor() {
        this.root = null;
        this.next = null;
        this.listSize = Number(this.root);
    }

    append(val) {
        if (!this.root) {
            this.next = this.root = new Node(val);
            this.listSize++;
            return;
        }
        this.next.nextNode = new Node(val);
        this.next = this.next.nextNode;
        this.listSize++;
    }

    prepend(val) {
        if (!this.root) {
            this.next = this.root = new Node(val);

            this.listSize++;
            return;
        }
        // The current root should be "pushed" to the next node
        // Make new root the new node

        this.listSize++;
    }

    size = () => this.listSize;
    head = () => this.root;
    tail = () => this.next;

    at(index) { }

    pop() {
        const lastNode = this.next;
        this.next = null;
        this.listSize--;
        return lastNode;
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

    }

    removeAt(index) { }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(53);
// console.log(linkedList.contains(4));
console.log(linkedList.toString());