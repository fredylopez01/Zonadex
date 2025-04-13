import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Account() {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <Icon name="facebook" size={30} color="#4F8EF7" />;
      <Icon name="rocket" size={30} color="#900" />
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
