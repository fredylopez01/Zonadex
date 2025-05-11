import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { getPokemonsFavoriteApi } from "../api/Favorite";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
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
