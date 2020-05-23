import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Platform } from "react-native";

import Categories from "../screens/Categories";
import CategoriesMeal from "../screens/CategoriesMeal";
import MealDetail from "../screens/MealDetail";
import Color from "../constants/Color";
import { CATEGORIES, MEALS } from "../data/dummy-data";
const Stack = createStackNavigator();

const MyStack = ({ prop }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Color.PRIMARY : Color.WHITE,
        },
        headerTintColor:
          Platform.OS === "android" ? Color.WHITE : Color.PRIMARY,
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="home"
        component={Categories}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoriesMeal}
        options={({ route }) => {
          const { categoryId } = route.params;

          const selectedCategory = CATEGORIES.find(
            (category) => category.id === categoryId
          );
          return {
            title: selectedCategory.title,
          };
        }}
      />
      <Stack.Screen
        name="Meal Detail"
        component={MealDetail}
        options={({ route }) => {
          const { mealId } = route.params;

          const selectedCategory = MEALS.find((meal) => meal.id === mealId);
          return {
            title: selectedCategory.title,
            headerRight: () => <Text>Hii</Text>,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
