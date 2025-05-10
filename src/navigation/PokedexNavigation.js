import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";
import { StyleSheet, Image, View } from "react-native";

const Stack = createStackNavigator();

const HeaderIcon = () => (
  <View style={styles.headerContainer}>
    <Image
      source={require("../assets/pokemonLogo.png")}
      style={styles.headerImage}
    />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fd7e14",
    margin: 0,
  },
  headerImage: {
    width: 60,
    height: 60,
  },
});

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokemons", headerTitle: () => <HeaderIcon /> }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
