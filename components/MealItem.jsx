import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MealItem = ({ onSelectMeal, title, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <Text>{title}</Text>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetail }}>
            <Text>{duration}m</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
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
  mealHeader: {
    height: "80%",
  },
  mealDetail: {
    height: "20%",
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
});

export default MealItem;
