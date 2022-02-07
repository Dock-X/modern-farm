export const Catalog = (harvestedFoodArray) => {
    const contentElement = document.querySelector('.container')
    
    let harvestHTMLRep = ""
    for(const food of harvestedFoodArray) {
        harvestHTMLRep += food.type
        
    }
    contentElement.innerHTML += `
        <article class="plant">
            ${harvestHTMLRep}
        </article>
    `
}