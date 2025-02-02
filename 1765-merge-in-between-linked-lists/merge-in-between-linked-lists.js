/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let p1 = null;
    let counter = 0;
    let c = list1;
    while(c) {
        if(counter < a) {
            p1 = c;
        }
        if(counter == b) {
            break;
        }
        counter = counter + 1
        c = c.next
    }
    p1.next = list2;
    let cc = list2;
    while(cc) {
        if(cc.next == null) {
            cc.next = c.next
            break
        }
        cc = cc.next
    }

    return list1
};