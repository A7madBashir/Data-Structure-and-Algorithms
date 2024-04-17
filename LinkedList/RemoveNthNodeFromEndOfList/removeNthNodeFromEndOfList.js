/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode, LinkedList } = require("../LinkedListClass/init");

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head == null || n < 1) return head;

    let h = head;
    let c = 1;
    while (h.next) {
        h = h.next
        c++;
    }

    let node = head;
    if (c - n <= 0) {
        head = head.next
        c--
    }

    while (node) {
        if (c - 1 == n) {
            if (node.next) {
                let t = node.next;
                node.next = null
                node.next = t.next
            } else node.next = null
            break
        }

        node = node.next
        c--;
    }

    return head;
};

// [1, 2, 3, 4, 5] n = 2 ==> [1, 2, 3, 5]
let ll = new LinkedList();
[1, 2, 3, 4, 5].forEach(e => ll.Append(new ListNode(e, null)))
console.log(ll.Read())

let res = new LinkedList();
res.set(removeNthFromEnd(ll.head, 2))

console.log(res.Read())