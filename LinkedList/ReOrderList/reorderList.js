/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { LinkedList, ListNode } = require("../LinkedListClass/init")
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// FIRST SOLUTION 
var reorderList = function (head) {
    if (head == null) return null;


    this.c ??= head.next;
    var P2 = this.c;
    this.fN = head;
    this.fN.next = null;
    let res = this.fN;

    while (true) {
        if (this.c == null) break;

        let lastNode = null;
        let firstNode = P2;
        while (P2) {
            lastNode = P2.next
            if (lastNode == null) break;
            else if (lastNode.next == null) {
                P2.next = null
                break
            }
            P2 = P2.next
        }

        if (lastNode) {
            res.next = lastNode
            res = res.next;
        }
        if (firstNode) {
            res.next = new ListNode(firstNode.val, null);
            res = res.next
        }

        this.c = this.c.next
        P2 = this.c;
    }

    return this.fN;
};

// [1,2,3,4,5]  => [1,5,2,4,3]
let ll = new LinkedList();
[1, 2, 3, 4, 5].forEach(e => ll.Append(new ListNode(e, null)))
console.log(ll.Read())

let res = new LinkedList();
res.set(reorderList(ll.head))

console.log(res.Read())

/**
 * BETTER CODE
 * 
var reorderList = function(head) {
    let node = head;
    while (node) {
        let scanNode = node;
        while (scanNode.next && scanNode.next.next) {
            scanNode = scanNode.next;
        }
        console.log(scanNode.val)
        let insertNode = scanNode.next;
        scanNode.next = null;
        let nextNode = node.next;
        console.log(nextNode?.val)
        node.next = insertNode;
        if (insertNode) {
            insertNode.next = nextNode;
            console.log(insertNode.val)
        }
        node = nextNode;
        console.log(node?.val)
    }
    return head
};
 * 
 */