import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import Color from "../constants/Color";

const FilterSwitch = ({ label, onChange, state }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={state}
      onValueChange={(newValue) => onChange(newValue)}
      trackColor={{ true: Color.PRIMARY }}
      thumbColor={Platform.OS === "android" ? Color.PRIMARY : ""}
    />
  </View>
);

const Filters = ({ navigation }) => {
  const [isGluttonFree, setIsGluttonFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVeaganFree, setIsVeaganFree] = useState(false);
  const [isVegetarianFree, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      gluttonFree: isGluttonFree,
      lactoseFree: isLactoseFree,
      veaganFree: isVeaganFree,
      vegetarianFree: isVegetarianFree,
    };

    console.log(appliedFilters);
  }, [isGluttonFree, isLactoseFree, isVegetarianFree, isVeaganFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>

      <FilterSwitch
        label="Glutton-free"
        onChange={setIsGluttonFree}
        state={isGluttonFree}
      />

      <FilterSwitch
        label="Lactose-free"
        onChange={setIsLactoseFree}
        state={isLactoseFree}
      />

      <FilterSwitch
        label="Veagan-free"
        onChange={setIsVeaganFree}
        state={isVeaganFree}
      />

      <FilterSwitch
        label="Vegeterian-free"
        onChange={setIsVegetarian}
        state={isVegetarianFree}
      />
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
    marginVertical: 15,
  },
});
export default Filters;
