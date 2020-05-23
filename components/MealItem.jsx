import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MealItem = ({ onSelectMeal, title }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={styles.row}></View>
          <View style={styles.row}>
            <Text>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  row: {
    flexDirection: "row",
  },
});

export default MealItem;
