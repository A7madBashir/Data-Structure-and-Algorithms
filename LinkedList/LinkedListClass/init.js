
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    set(head) {
        this.head = head
    }

    get() {
        return this.head
    }

    Append(newNode) {
        if (this.head == null)
            this.head = newNode
        else {
            let t = this.head;
            while (t.next) {
                t = t.next;
            }
            t.next = newNode;
        }
    }

    Read() {
        let values = [];
        let t = this.head;
        while (t) {
            values.push(t.val)
            t = t.next
        }
        return values;
    }
}

module.exports.LinkedList = LinkedList
module.exports.ListNode = ListNode