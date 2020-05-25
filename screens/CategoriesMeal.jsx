import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoriesMeal = ({ navigation, route }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const { categoryId } = route.params;

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );

  if (displayMeals.length === 0 || !displayMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList data={displayMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMeal;
