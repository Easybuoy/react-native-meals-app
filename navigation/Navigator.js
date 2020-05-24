import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../screens/Categories";
import CategoriesMeal from "../screens/CategoriesMeal";
import MealDetail from "../screens/MealDetail";
import Favourites from "../screens/Favourites";
import HeaderButton from "../components/HeaderButton";
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
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favourite"
                  iconName="ios-star"
                  onPress={() => console.log("aa")}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FavouritesStack = ({ prop }) => {
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
      <Stack.Screen name="Your Favourites" component={Favourites} />
      <Stack.Screen
        name="Meal Detail"
        component={MealDetail}
        options={({ route }) => {
          const { mealId } = route.params;

          const selectedCategory = MEALS.find((meal) => meal.id === mealId);
          return {
            title: selectedCategory.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favourite"
                  iconName="ios-star"
                  onPress={() => console.log("aa")}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MyTab = () => (
  <Tab.Navigator
    shifting={true}
    barStyle={{ backgroundColor: Color.PRIMARY }}
    tabBarOptions={{ activeTintColor: Color.SECONDARY }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Meals") {
          iconName = "ios-restaurant";
        } else if (route.name === "Favourites") {
          iconName = "ios-star";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Meals" component={MyStack} />
    <Tab.Screen name="Favourites" component={FavouritesStack} />
  </Tab.Navigator>
);

export { MyStack, MyTab };
