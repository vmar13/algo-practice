const pasarPorTodos = cuartos => {
    //Keep track of visited rooms (subarrays)
    //Start by adding first subarray, since we already have access
    //Llaves initially contains key for first room bc we're in it already
    let cuartosVisitados = [];
    cuartosVisitados.push(cuartos[0]);
    let llaves = [0];

    let cuarto = cuartosVisitados.shift();
    console.log(cuarto)
}


console.log(pasarPorTodos([[1,3],[2,0,1],[0,3], [0]]))


// var canVisitAllRooms = function(rooms) {
//     let n = rooms.length;
//     let visited = Array(n).fill(0);

//         function visit(i, rooms) {
//             if(visited[i] == 1) {
//                 return;
//             }
//             visited[i] =1;
//             for(next of rooms[i]) {
//                 visit(next, rooms);
//             }
//         }     
        
       
//         visit(0, rooms);
//         for(i of visited) {
//             if(i == 0) {
//                 return false;
//             }
//         }
//         return true;  
//     };