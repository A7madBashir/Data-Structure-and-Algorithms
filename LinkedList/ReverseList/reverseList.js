/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { LinkedList, ListNode } = require("../LinkedListClass/init");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head == null) return head;

    let reversedList = null

    while (head) {
        let t = { val: head.val, next: null };
        t.next = reversedList;
        reversedList = t
        head = head.next
        if (head == null)
            break
    }
    return reversedList
};


let ll = new LinkedList();
[1, 2, 3, 4, 5].forEach(e => ll.Append(new ListNode(e, null)))
console.log(ll.Read())

ll.set(reverseList(ll.head))

console.log(ll.Read())