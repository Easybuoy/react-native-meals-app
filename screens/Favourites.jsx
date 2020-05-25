import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const Favourites = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  return <MealList data={favMeals} navigation={navigation} />;
};

export default Favourites;
