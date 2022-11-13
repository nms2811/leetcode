/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let low = 0;
    let high = nums1.length;
    let total = nums1.length + nums2.length
    while(low <= high) {
        let cut1 = Math.ceil((low + high) / 2);
        let cut2 = Math.ceil(total / 2 - cut1);
        let l1 = (cut1 === 0)? Number.NEGATIVE_INFINITY:nums1[cut1 - 1];
        let l2 = (cut2 === 0)? Number.NEGATIVE_INFINITY:nums2[cut2 - 1];
        let r1 = (cut1 === nums1.length)? Number.POSITIVE_INFINITY:nums1[cut1];
        let r2 = (cut2 === nums2.length)? Number.POSITIVE_INFINITY:nums2[cut2];

        if (l1 > r2){
            high = cut1 - 1;
        }else if (l2  > r1) {
            low = cut1 + 1;
        } else {
            return total % 2 === 0? (Math.max(l1, l2) + Math.min(r1, r2))/2 : Math.max(l1, l2)
        }
    }

};