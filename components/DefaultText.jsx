import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;
