/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const pair = nums1.map((x,i)=> [x, nums2[i]]).sort((a,b) => b[1] - a[1]);
    let sum = 0, ans = 0;
    const pq = new MinPriorityQueue();

    for(const [n1, n2] of pair) {
        pq.enqueue(n1);
        sum += n1;
    
        if(pq.size() === k) {
            ans = Math.max(ans, sum * n2);
            sum -= pq.dequeue().element
        }
    }
    return ans;
};