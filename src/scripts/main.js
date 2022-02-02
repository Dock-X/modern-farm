import { addPlant } from './field.js'
import { usePlant } from './field.js'

import { createPlan } from './plan.js'
const yearlyPlan = createPlan()


import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'


addPlant(createAsparagus())
addPlant(createCorn())
addPlant(createPotato())
addPlant(createSoybean())
addPlant(createSunflower())
addPlant(createWheat())
console.log(usePlant())
//console.log(yearlyPlan())