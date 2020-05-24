import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoriesMeal = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  return <MealList data={displayMeals} navigation={navigation} />;
};

CategoriesMeal.navigationOptions = (navigationData) => {
  console.log(navigationData);
  return {
    title: "Choi",
  };
};

export default CategoriesMeal;
