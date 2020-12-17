//iterate through potions array
// for each potion, sum up the volumes
// for each potion, multiply each ingredient by the volume. Sum those up
//return {} 

const mixedPotions =potions => { //arg = array of obejcts 
    let newPotion = {
        ingredients: {}
    }
    let volumeTotal = 0
    // Get newPotions total Volume
    for(let potionObj of potions) {
        volumeTotal += potionObj.volume 
    }

   
    return newPotion
}


let potions = [{
    volume: 100,
    ingredients: {ingredient1:50, ingredient2:20, ingredientA: 500}
},{
    volume: 300,
    ingredients: {ingredient1:150, ingredientA:300, ingredientB:950}
}]

// Result 
//{ volume: 400,
//      ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350,ingredientB: 712.5 
//}}

mixedPotions(potions)