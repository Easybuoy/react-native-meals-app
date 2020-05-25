import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoriesMeal = ({ navigation, route }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  return <MealList data={displayMeals} navigation={navigation} />;
};

CategoriesMeal.navigationOptions = (navigationData) => {
  return {
    title: "Choi",
  };
};

export default CategoriesMeal;
