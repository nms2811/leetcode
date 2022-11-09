
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;
    let i = this.stack.length-1;

    if (this.stack.length > 0 && price >= this.stack[i].price) {
        console.log(this.stack[i].price);
        console.log(price)
        while(price >= this.stack[i].price) {         
            count++;
            if (i == 0) {
                break;
            }
            i--;     
        }
    }
    
    this.stack.push({price, count})
    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */