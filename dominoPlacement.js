//You are given integers n and m representing a board of size n by m. 
//You also have an unlimited number of 1 by 2 dominos.
//Return the maximum number of dominos that can be placed on the board 
//such that they don't overlap and every domino lies entirely within the board.

const dominoPlacement = (n, m) => {
    let boardSize = n * m
    return Math.floor(boardSize/2)
}

console.log(dominoPlacement(2, 2))
//2

