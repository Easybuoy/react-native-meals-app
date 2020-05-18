import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
const CategoriesMeal = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  //   console.log(categoryId);
  //   console.log(selectedCategory);
  return (
    <View style={styles.screen}>
      <Text>Categories Meal</Text>
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
