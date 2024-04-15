/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { LinkedList, ListNode } = require("../LinkedListClass/init");

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {

    this.sortedLists = null;
    let l1 = list1;
    let l2 = list2;

    let c;
    while (l1 || l2) {
        let f1 = false;

        if (l1?.val <= l2?.val || !l2) {
            f1 = true;
        }

        if (c == null) {
            if (f1) {
                this.sortedLists = new ListNode(l1.val, null)
                l1 = l1.next
            }
            else {
                this.sortedLists = new ListNode(l2.val, null)
                l2 = l2.next
            }

            c = this.sortedLists;
            continue
        }
        else {
            if (c.next)
                c = c.next;
        }

        if (f1) {
            c.next = l1
            if (l1)
                l1 = l1.next;
        } else {
            c.next = l2
            if (l2)
                l2 = l2.next;
        }

        if (c.next)
            c.next.next = null
    }

    return sortedLists;
};

let l1 = new LinkedList();
[1, 2, 4].forEach(e => l1.Append(new ListNode(e, null)));

let l2 = new LinkedList();
[1, 3, 4].forEach(e => l2.Append(new ListNode(e, null)));
console.log(l1.Read(), l2.Read())

let l3 = new LinkedList();
l3.set(mergeTwoLists(l1.head, l2.head))

console.log(l3.Read())

/**
 * ! BEST MEMORY SOLUTION
 * var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(-1, null);
    let current = head;

    while (list1 !== null || list2 !== null) {
        if (list1 === null || (list2?.val === undefined ? 101 : list2.val) < list1.val) {
            current.next = new ListNode(list2.val, null);
            list2 = list2.next;
        } else {
            current.next = new ListNode(list1.val, null);
            list1 = list1.next;
        }

        current = current.next;
    }

    return head.next;
};
 */

/**
 * ! BEST RUNTIME SOLUTION
 * var mergeTwoLists = function(list1, list2) {

    if(!list1) return list2;
    if(!list2) return list1;
    if(!list1 && !list2) return null;
    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
 */