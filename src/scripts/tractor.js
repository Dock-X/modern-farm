import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyplan) => {
    for (const plan of yearlyplan) {
        for (const seed of plan) {
            if (seed === "Potato") {
                addPlant(createPotato())
            }
            if (seed === "Soybean") {
                addPlant(createSoybean())
            }
            if (seed === "Asparagus") {
                addPlant(createAsparagus())
            }
            if (seed === "Sunflower") {
                addPlant(createSunflower())
            }
            if (seed === "Wheat") {
                addPlant(createWheat())
            }
            if (seed === "Corn") {
                createCorn().forEach(addPlant)
            }
        }
    }

}