/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let players = {};
    let losers = {};
    let first = [];
    let second = [];
    for (let i = 0; i < matches.length; i++){
        let winner = matches[i][0];
        let loser = matches[i][1];
        if(!losers[loser]) losers[loser] = 1;
        else losers[loser]++;
        if(!players[winner]) players[winner] = 1;
        if(!players[loser]) players[loser] = 1;
    }

        for(let key in players) {
            if(losers[key] === 1) second.push(key);
            if(!losers[key]) first.push(key);
        }
    return new Array(first.sort((a, b) => a - b), second.sort((a,b) => a - b));
};