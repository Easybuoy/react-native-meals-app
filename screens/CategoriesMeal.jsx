import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import Meal from "../models/meal";
const CategoriesMeal = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("Meal Detail", {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };
  return <MealList data={displayMeals} renderItem={renderMealItem} />;
};

CategoriesMeal.navigationOptions = (navigationData) => {
  console.log(navigationData);
  return {
    title: "Choi",
  };
};

export default CategoriesMeal;
