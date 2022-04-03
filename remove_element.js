const nums1 = [3,2,2,3]
const val1 = 3

const nums2 = [0,1,2,2,3,0,4,2]
const val2 = 2

//should take out the value from array and count how many numbers are left after removal of element

var removeElement = function(nums, val) {
    const number= []
    let n= 0
    for (let i=0; i<nums.length; i++) {
        if(nums[i]!=val) {
            number.push(nums[i]);
            nums[n] = nums[i];
            n++;
        }
    }
    console.log(number)
    return n
}
console.log(removeElement(nums1, val1))
console.log(removeElement(nums2, val2))