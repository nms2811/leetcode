var MedianFinder = function() {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let low = 0;
    let high = this.arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) /2);
        (this.arr[mid] > num)? high = mid - 1: low = mid + 1;
    }
    this.arr.splice(low, 0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.arr.length % 2 === 0) {
        let a = this.arr[(this.arr.length/2) - 1] + this.arr[(this.arr.length/2)];
        return a/2;
    }
    if (this.arr.length % 2 !== 0) {
        return this.arr[Math.floor((this.arr.length) / 2)];
    }

};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
