import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CategoryGridTile = ({ onSelect, title, color }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
});

export default CategoryGridTile;
