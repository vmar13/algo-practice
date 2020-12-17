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

    let store = {};
    // Sum the numerators for each ingredient
    for(let potionObj of potions) { //[{volume, ingredients:{}}]
        const ingObj = potionObj.ingredients
        const volume = potionObj.volume
        for (let ing in ingObj) { // ingredients: {x,y,z}
            const ingredient = ingObj[ing];
            store[ing] ? store[ing] += ingredient * volume : store[ing] = ingredient * volume; 
        }
    }
    // Use store to find concentration of each ingredient
    
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