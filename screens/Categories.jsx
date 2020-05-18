import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const Categories = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button title="Go to" onPress={() => props.navigation.navigate("mealdetail")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Categories;
