import LinkedList from "@fredvel/linked-list-js";

class CustomLinkedList extends LinkedList {

    addToStart(value) {
        this.insertAtHead(value);
    }
    
    addToEnd(value) {
        this.appendNewNode(value);
    }

    removeFirst() {
        this.removeFrom(0);
    }

    removeLast() {
        this.removeLastNode();
    }

    contains(value) {
        const found = this.findNode((item) => item === value);
        return found !== undefined;
    }

    getByIndexCustom(index) {
        return this.getByIndex(index);
    }


    insertByIndex(index, value) {
        this.insertAt(index, value);
    }

    removeByIndex(index) {
        this.removeFrom(index);
    }

    getMax() {
        const arr = this.getAllNodes();
        return arr.length ? Math.max(...arr) : undefined;
    }

    getMin() {
        const arr = this.getAllNodes();
        return arr.length ? Math.min(...arr) : undefined;
    }

    getSize() {
        return this.size();
    }

    formattedOutput() {
        const arr = this.getAllNodes();
        return arr
            .map((value, index) => `{[index:${index}; value:${value}]}`)
            .join(" ");
    }

    insertArrayAt(index, array) {
        array.forEach((value, i) => {
            this.insertAt(index + i, value);
        });
    }
}


const list = new CustomLinkedList();

list.addToStart(5);
list.addToEnd(10);
list.addToEnd(20);
list.addToStart(1);

list.insertByIndex(2, 7);
list.insertArrayAt(3, [100, 200, 300]);

console.log("Formatted:", list.formattedOutput());
console.log("Max:", list.getMax());
console.log("Min:", list.getMin());
console.log("Contains 10:", list.contains(10));
console.log("Size:", list.getSize());
