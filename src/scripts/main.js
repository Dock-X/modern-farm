import { addPlant } from './field.js'
import { usePlant } from './field.js'

import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

const plan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
plantSeeds(plan)
//console.log(usePlant())

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { plantSeeds } from './tractor.js'

/*
    addPlant(createAsparagus())
    addPlant(createCorn())
    addPlant(createPotato())
    addPlant(createSoybean())
    addPlant(createSunflower())
    addPlant(createWheat())
*/
console.log(usePlant())
