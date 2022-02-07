export const harvestPlants = (plantsArray) => {
    let seedObj = []
    for (const plantHarvesting of plantsArray) {
            if(plantHarvesting.type === "Corn") {
                    for(let index = 0; index < plantHarvesting.output/2; index++)
                    seedObj.push(plantHarvesting)
                } else {
                    for(let index = 0; index < plantHarvesting.output; index++)
                    seedObj.push(plantHarvesting)
                }
        

    }
    return seedObj
}