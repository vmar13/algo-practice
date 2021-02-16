function numKeypadSolutions(wordlist, keypads) {
    let validWords = [0];
    let keypadsCounter = {};
    let q = [];
    q.push(keypads[0]);
    let keypad = q.shift();

    while(q.length > 0){
        for(let char of keypad){
            keypadsCounter[char] = keypadsCounter[char]+1 || 1
            q.push(keypads[char])
        }
    }
}

console.log(numKeypadSolutions([['APPLE'],['PLEAS'],['PLEASE']], [['AELWXYZ'],['AELPXYZ'],['AELPSXY'],['SAELPXY'], ['XAELPSY']]))
