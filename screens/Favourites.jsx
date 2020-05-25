import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const Favourites = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favourite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  return <MealList data={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Favourites;
