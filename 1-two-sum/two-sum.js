/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];
    let map = new Map();
    let s = nums.length;
    for( let i = 0; i < s; i++) {
        let r = target - nums[i]
        map.set(r,{ i: i, v:nums[i]})
        
    }
    for( let i = 0; i < s; i++) {
        if(map.has(nums[i])) {
            let o = map.get(nums[i])
            if( i != o.i) {
                res = [i,o.i];
                break;
            }
            
        }
     }
    
    return res
};