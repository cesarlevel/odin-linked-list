class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.listSize = this.head ? 1 : 0;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
        }

        pointer.next = new Node(value);
        this.listSize++;
    }

    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        
        this.head = new Node(value, this.head);
        this.listSize++;
    }

    at(index) {
        let atIndexNode = this.head;

        for (let i = 0; i <= index - 1; i++) {
            atIndexNode = atIndexNode?.next || null;
        }

        return atIndexNode;
    }

    pop() {
        if (!this.listSize) return undefined;
        if (this.listSize === 1) {
            this.head = null;
            this.listSize--;
            return;
        }

        const newTailNode = this.at(this.listSize - 2);
        newTailNode.next = null;
        this.listSize--;
    }

    contains(value) {
        if (!this.head) return false;
        if (this.head.value === value) return true;

        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
            if (pointer.value === value) return true;
        }

        return false;
    }

    find(value) {
        if (!this.head) return null;
        if (this.head.value === value) return 0;

        let index = 0;
        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
            index++;
            if (pointer.value === value) return index;
        }

        return null;
    }

    toString() {
        if (!this.head) return '';

        let string = `(${this.head.value}) -> `;
        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
            string += `(${pointer.value}) -> `;
        }

        return `${string}null`;
    }

    insertAt(value, index) {
        if (index === this.listSize) return null;

        let pointer = this.at(index - 1);

        if (index === 0) {
            this.prepend(value);
            return;
        }

        pointer.next = new Node(value, pointer.next);

        this.listSize++;
    }

    removeAt(index) {
        if (index === this.listSize) return null;

        let pointer = this.at(index - 1);
        let nextPointer = this.at(index);

        if (index === 0) {
            this.head = this.head.next;
        } else {
            pointer.next = nextPointer.next;
        }

        this.listSize--;
    }

    get size() {
        return this.listSize;
    }

    get getHead() {
        return this.head;
    }

    get getTail() {
        let pointer = this.head;

        while (pointer.next) {
            pointer = pointer.next;
        }

        return pointer;
    }
}

const firstNode = new Node('first');
const list = new LinkedList(firstNode);

list.append('second');
list.append('forth');
list.prepend('zero');
list.insertAt('third', 3);
list.insertAt('-1', 0);
list.append('fifth');
list.pop();
list.insertAt('third and half', 5);
list.removeAt(5);
list.removeAt(0);

let showList = document.createElement('h1');
showList.style.textAlign = 'center';
showList.style.fontFamily = 'monospace, monospace';
showList.innerHTML = list.toString();
document.body.append(showList);

