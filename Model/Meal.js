class Meal {
    constructor(id, categoriesIds, title, affordibality, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree){
        this.id = id;
        this.categoriesIds = categoriesIds;
        this.title = title;
        this.affordibality = affordibality;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;