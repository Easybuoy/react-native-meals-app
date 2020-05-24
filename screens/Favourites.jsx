import React from "react";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const Favourites = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList data={favMeals} navigation={navigation} />;
};

export default Favourites;
