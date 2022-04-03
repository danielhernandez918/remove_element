const nums1 = [3,2,2,3]
const val1 = 3

const nums2 = [0,1,2,2,3,0,4,2]
const val2 = 2


var removeElement = function(nums, val) {
    const newArr= []
    for (let i=0; i<nums.length; i++) {
        if(nums[i]!=val) {
            newArr.push(nums[i])
        }
    }
    return newArr
}
console.log(removeElement(nums1, val1))
console.log(removeElement(nums2, val2))