import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
const MealList = ({ data , renderItem}) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
});

export default MealList;
