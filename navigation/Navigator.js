// import { createAppContainer, NavigationContainer } from "react-navigation";
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Categories from "../screens/Categories";
import CategoriesMeal from "../screens/CategoriesMeal";
import MealDetail from "../screens/MealDetail";

// const MealsNavigator = createStackNavigator({
//   Categories,
//   CategoriesMeal: {
//     screen: {
//       CategoriesMeal,
//     },
//     MealDetail,
//   },
// });

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Categories} />
      <Stack.Screen name="categoriesmeal" component={CategoriesMeal} />
      <Stack.Screen name="mealdetail" component={MealDetail} />
    </Stack.Navigator>
  );
}

export default MyStack;
// export default createAppContainer(MealsNavigator);
