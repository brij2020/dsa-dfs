/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let l1 = null
    let l1head = null;
    let l2 = null;
    let l2head = null;
    let  c = head;
    if(head == null || head.next == null) return head
    while(c) {
        let n = new ListNode(c.val)
        if(c.val < x) {
            if(l1head == null) {
                l1head = n;
                l1 = l1head
            } else {
                l1.next = n;
                l1 = n
            }
        } else {
             if(l2head == null) {
                l2head = n;
                l2 = l2head;
            } else {
                l2.next = n;
                l2 = n;
            }
        }
        c = c.next;
    } 
    let lc = l1head;
    while(lc) {
        if(lc.next == null) {
            lc.next = l2head;
            break
        }
        lc = lc.next
    }
    return l1head || l2head
};