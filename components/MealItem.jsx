import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <Text>{title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetail }}>
            <Text>{duration}m</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
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
    height: "90%",
  },
  mealDetail: {
    height: "10%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});

export default MealItem;
