import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Favorite() {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
