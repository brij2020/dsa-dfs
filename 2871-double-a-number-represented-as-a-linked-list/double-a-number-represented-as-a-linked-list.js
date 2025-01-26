/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 const carry = (n,c) => {
    if( n+c > 9) {    
        let cm = (n+c)%10;
        return {
            msd: cm,
            c: ((n+c) - cm)/10
        }
    }   
    return {c:0, msd: n + c }
 }
var doubleIt = function(head) {
    
    let st = [];
    let current = head;
    let c = 0; 
    let last = null
    while (current) {
        st.push(current)
        last = current
        current = current.next
    }
    while(st.length) {
       let node = st.pop()
       let v = carry(node.val * 2, c)
       c = v.c
       node.val = v.msd
    }
    if(c > 0) {
        let nn = { next: null, val : c};
        nn.next = head
        head = nn
    }
    return head
};