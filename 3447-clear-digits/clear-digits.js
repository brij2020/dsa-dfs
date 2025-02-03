/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let st = [];
    let res = '';
    for(x of s) {
        if(isNaN(Number(x))) {
            st.push(x);
        } else {
            st.pop()

        }
    }
    res = st.reduce((acc,s) => acc+s, res)
    return res
};