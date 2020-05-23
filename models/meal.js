class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGluttonFree,
    isVeagan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGluttonFree = isGluttonFree;
    this.isVeagan = isVeagan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
