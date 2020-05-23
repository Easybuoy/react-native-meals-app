import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem'
import Meal from "../models/meal";
const CategoriesMeal = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );
  console.log(displayMeals);

  const renderMealItem = (itemData) => {
  return (<MealItem title={itemData.item.title} />)
  }
  return (
    <View style={styles.screen}>
      <FlatList data={displayMeals} renderItem={renderMealItem} style={{width: '100%'}} />
    </View>
  );
};

CategoriesMeal.navigationOptions = (navigationData) => {
  console.log(navigationData);
  return {
    title: "Choi",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesMeal;
