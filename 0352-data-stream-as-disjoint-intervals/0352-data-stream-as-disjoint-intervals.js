
var SummaryRanges = function() {
    this.list = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.list[value] =true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    let res = [];
    for(let i = 0; i < this.list.length; i++){
        if(this.list[i]){
            let j = i;
            while(this.list[j])j++;
            res.push([i, j - 1]);
            i = j;
        }

    }
    return res;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */