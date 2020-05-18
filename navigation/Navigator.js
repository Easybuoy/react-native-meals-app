import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Categories from "../screens/Categories";
import CategoriesMeal from "../screens/CategoriesMeal";
import MealDetail from "../screens/MealDetail";
import Color from "../constants/Color";
import { Platform } from "react-native";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Color.PRIMARY : Color.WHITE,
        },
        headerTintColor:
          Platform.OS === "android" ? Color.WHITE : Color.PRIMARY,
      }}
    >
      <Stack.Screen
        name="home"
        component={Categories}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoriesMeal} />
      <Stack.Screen name="mealdetail" component={MealDetail} />
    </Stack.Navigator>
  );
}

export default MyStack;
