import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js';

import { createPlan } from './plan.js';

const yearlyPlan = createPlan();

console.log(yearlyPlan)


import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
// console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
// console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
import { plantSeeds } from './tractor.js';
const wheatSeed = createWheat()
// console.log(wheatSeed)

console.log(usePlants())


addPlant(createAsparagus())
addPlant(createCorn())
addPlant(createPotato())
addPlant(createSoybean())
addPlant(createSunflower())
addPlant(createWheat())
console.log(usePlants())

const plan = [
    ["potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]


plantSeeds(yearlyPlan)

const currentField = usePlants()
console.log(currentField)

const harvest = harvestPlants(currentField);
console.log(harvest);

const plantstoDOM = (plantArray) => {
    return `
        <section class="plants">
            ${plantArray}
        </section>
    `
}

const Catalog = () => {
    const contentElement = document.querySelector('.messages')

    

    let harvestHTMLRep = ""

    for(const food of harvest) {
        harvestHTMLRep += plantstoDOM(food.type)
        
    }
    contentElement.innerHTML += `
        <article>
            ${harvestHTMLRep}
        </article>
    `
    
}

Catalog()