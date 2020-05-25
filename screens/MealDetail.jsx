import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

import DefaultText from "../components/DefaultText";
import { MEALS } from "../data/dummy-data";

const MealDetail = ({ route }) => {
  const { mealId } = route.params;
  console.log(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>

      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>* {ingredient}</Text>
      ))}
      
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>* {step}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});
export default MealDetail;
