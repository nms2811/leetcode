/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let basket = new Map(), l = 0, res = 0;
    for(let r = 0; r < fruits.length; r++) {
        basket.set(fruits[r], (basket.get(fruits[r])|| 0) + 1)
        while(basket.size > 2) {
            basket.set(fruits[l], basket.get(fruits[l]) - 1);
            if(basket.get(fruits[l]) === 0) basket.delete(fruits[l]);
            l++;
        }
        res = Math.max(res, r - l + 1)
    }
    return res;
};