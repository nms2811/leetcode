/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let pq = new MaxPriorityQueue();
    let ans = 0;
    for(let pile of piles) {
        pq.enqueue(pile);
        ans += pile;
    }
    for(let i = 0; i < k; i++) {
        let curr = pq.dequeue().element;
        let temp = Math.floor(curr / 2);
        ans -= temp;
        pq.enqueue(curr - temp);
    }
    return ans;
};