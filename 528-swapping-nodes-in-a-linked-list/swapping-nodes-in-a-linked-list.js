/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let st = [];
    c = head;
    let x = 0;
    let first = null;
    let last = null;
    while(c) {
        x++;
        if(x == k){
            first = c
        }
        st.push(c)
        c = c.next 
    }
    x = 0
    while(st.length) {
        x++;
        let c = st.pop(); 
        if(x == k) {
            let t = c.val
            c.val = first.val
            first.val = t
        }
    }
    return head;
};