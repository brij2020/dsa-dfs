/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let stack = [];
    for(let car of preorder?.split(',') ) {
         stack.push(car)
        if(car == '#') {
            while(stack.length >= 3 && stack.at(-1) == '#' && stack.at(-2) == '#' && stack.at(-3) != '#') {
                stack.pop()
                stack.pop()
                stack.pop()
                stack.push('#')
            }
        }
    }

    return stack.length == 1 && stack[0] == '#' ? true : false
};