import { StyleSheet, View, Platform } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/Favorite";
import { getPokemonDetailsApi } from "../api/Pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/auth/NoLogged";
import NoLikedPokemons from "../components/NoLikedPokemons";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const likedPokemons = await getPokemonsFavoriteApi();

          const pokemonsArray = [];
          for await (const id of likedPokemons) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              height: pokemonDetails.height,
              weight: pokemonDetails.weight,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return (
    <View style={styles.container}>
      {!auth ? (
        <NoLogged />
      ) : pokemons.length == 0 ? (
        <NoLikedPokemons />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 35 : 0,
    paddingBottom: Platform.OS === "android" ? 20 : 0,
  },
});
