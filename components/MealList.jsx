import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { useSelector } from "react-redux";
import MealItem from "./MealItem";

const MealList = ({ data, navigation }) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);

  const renderMealItem = (itemData) => {
    const isFavouriteMeal = favouriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
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
            mealTitle: itemData.item.title,
            isFav: isFavouriteMeal,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
});

export default MealList;
