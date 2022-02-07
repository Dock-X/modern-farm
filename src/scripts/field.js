const field = []
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (var i = 0; i < seed.length; i++) {
            field.push(seed[i])
        }
    }
    else {field.push(seed)}
}

export const usePlants = () => {return field}