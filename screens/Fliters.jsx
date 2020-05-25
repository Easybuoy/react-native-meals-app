import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import Color from "../constants/Color";

const Filters = () => {
  const [isGluttonFree, setIsGluttonFree] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>

      <View style={styles.filterContainer}>
        <Text>Glutton-free</Text>
        <Switch
          value={isGluttonFree}
          onValueChange={(newValue) => setIsGluttonFree(newValue)}
          trackColor={{ true: Color.PRIMARY }}
          thumbColor={Platform.OS === "android" ? Color.PRIMARY : ""}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});
export default Filters;
