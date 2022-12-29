/*
*
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    let current = 0;
    let res = [];
    let taskIndex = 0;
    let pq = new MinPriorityQueue({
        compare:(a, b) => {
            if(a.process === b.process)return a.index - b.index;
            else return a.process - b.process;
        }
        });
    tasks = tasks.map((task, index)=> ({
        start:task[0],
        process:task[1],
        index
    })).sort((a,b) => a.start - b.start);
    
    while(res.length < tasks.length) {
        while(taskIndex < tasks.length && tasks[taskIndex].start <= current) {
            pq.enqueue(tasks[taskIndex]);
            taskIndex++;
        }
        if(!pq.isEmpty()) {
           let best =  pq.dequeue();
           res.push(best.index);
           current += best.process
        }else if(taskIndex < tasks.length){
            current = tasks[taskIndex].start   
        }
    }
    return res;
};
