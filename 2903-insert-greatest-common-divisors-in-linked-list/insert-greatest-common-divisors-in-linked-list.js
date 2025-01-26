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
const gcd = (num1, num2) => {

    const __inner = (n1,n2) => {
        if(n1%n2 == 0) return n2
        return __inner(n2, n1%n2)

    }

    if(num1 > num2) {
        return __inner(num1, num2)
    } else {
        return __inner(num2, num1)

    }

}
var insertGreatestCommonDivisors = function(head) {
    let c = head
    let prev = null
    while(c) {
        if(prev !==null) {
            let intermediat = gcd(prev.val, c.val);
            let n = new  ListNode(intermediat);
            prev.next = n;
            n.next = c;
        }
        prev = c;
        c = c.next;
    }
    return head
};













