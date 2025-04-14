import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsApi } from "../api/Pokemon";
import HeaderPokemon from "../components/pokemon/HeaderPokemon";
import TypesPokemon from "../components/pokemon/TypesPokemon";
import StatsPokemon from "../components/pokemon/StatsPokemon";

export default function PokemonScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name="heart" color="#fff" size={24} style={{ marginRight: 24 }} />
      ),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={22}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <HeaderPokemon
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.types[0].type.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
      />
      <TypesPokemon types={pokemon.types} />
      <StatsPokemon stats={pokemon.stats} type={pokemon.types[0].type.name} />
    </ScrollView>
  );
}
