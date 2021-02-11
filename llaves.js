const pasarPorTodos = rooms => {
    //Keep track of visited rooms (subarrays)
    //Start by adding first subarray, since we already have access
    //Llaves initially contains key for first room bc we're in it already
    let q = []
    q.push(rooms[0])
    //q=[[1,3]] AoA
    let keys = [0]

    while(q.length > 0){
        let room = q.shift()
        //q = []
        //room = [1,3]
        for (let item of room) {
            if(!keys.includes(item)){
                keys.push(item)
                q.push(rooms[item])
                //q= [[2,0,1], [0]]
            }
        }
    }
    
}


console.log(pasarPorTodos([[1,3],[2,0,1],[0,3], [0]]))


// let cuartosVisitados = [];
// cuartosVisitados.push(cuartos[0]);
// let llaves = [0];

// let cuarto = cuartosVisitados.shift();

// for (let llave of cuarto) {
//     if(!llaves.includes(llave)){
//         llaves.push(llave)
//         cuartosVisitados.push(cuartos[llave])
//     }
    
// }
