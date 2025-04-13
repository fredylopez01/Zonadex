import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsApi } from "../api/Pokemon";
import HeaderPokemon from "../components/HeaderPokemon";
import TypesPokemon from "../components/TypesPokemon";

export default function PokemonScreen(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
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
    </ScrollView>
  );
}
