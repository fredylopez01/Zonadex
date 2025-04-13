import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { capitalizeFirstLetter } from "../utils/TextUtils";
import getColorByType from "../utils/ColorUtils";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  const cardContainerStyles = {
    backgroundColor: getColorByType(pokemon.type),
    ...styles.cardContainer,
  };

  const gotToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={gotToPokemon}>
      <View style={cardContainerStyles}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalizeFirstLetter(pokemon.name)}</Text>
          <Text style={styles.order}>{`${pokemon.order}`.padStart(3, 0)}</Text>
        </View>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 80,
    height: 180,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 15,
  },
  order: {
    color: "#fff",
    backgroundColor: "#adadad",
    borderRadius: 5,
    paddingHorizontal: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 120,
    height: 120,
    bottom: 2,
    right: 2,
  },
});
