/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var sortColors = function(nums, low, high) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function partition (arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j <= high-1; j++) {
            if(arr[j] < pivot) {
                i++;
                swap(arr,i,j);
            }
        }
        swap(arr,i+1,high);
        return(i+1);
    }
    function quicksort(nums, low, high){
        if (low < high) {
            let pi = partition(nums, low, high);
            quicksort(nums, low, pi - 1);
            quicksort(nums, pi + 1, high);
        }
    }
    quicksort(nums, 0, nums.length - 1);
    
};