class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
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
    }

    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        this.head = new Node(value, this.head);
    }

    at(index) {
        if (index >= this.getSize || index < 0 || isNaN(index)) throw new Error ('Invalid index');

        let pointer = this.head;

        for (let i = 0; i <= index - 1; i++) {
            pointer = pointer?.next || undefined;
        }

        return pointer;
    }

    pop() {
        const size = this.getSize;

        if (!size) return undefined;
        if (size === 1) {
            this.head = null;
            return;
        }
        
        const tailPointer = this.at(this.getSize - 2);
        tailPointer.next = null;
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
        if (index === 0) {
            this.prepend(value);
        } else {
            let pointer = this.at(index - 1);
            pointer.next = new Node(value, pointer.next);
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let pointer = this.at(index - 1);
            let nextPointer = this.at(index);
            pointer.next = nextPointer.next;
        }
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

    get getSize() {
        let counter = this.head ? 1 : 0;
        let pointer = this.head;

        if (!this.head) return 0;

        while (pointer.next) {
            pointer = pointer.next;
            counter++;
        }

        return counter;
    }
}

const firstNode = new Node('first');
const list = new LinkedList(firstNode);

list.append('second');
list.append('forth');
list.prepend('zero');
list.insertAt('third', 3);
list.insertAt('minus', 0);
list.append('fifth');
list.pop();
list.insertAt('third and half', 5);
list.removeAt(5);
list.removeAt(0);
console.log(list.getSize)

let showList = document.createElement('h1');
showList.style.textAlign = 'center';
showList.style.fontFamily = 'monospace, monospace';
showList.innerHTML = list.toString();
document.body.append(showList);

