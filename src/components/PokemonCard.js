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
import Icon from "react-native-vector-icons/FontAwesome5";
import Favorite from "./pokemon/Favorite";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  const backgroundColorCard = getColorByType(pokemon.type);

  const gotToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={gotToPokemon}>
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: `${backgroundColorCard}` },
        ]}
      >
        <View style={styles.favorite}>
          <Favorite id={pokemon.id} margin={false} />
        </View>

        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.name}>{capitalizeFirstLetter(pokemon.name)}</Text>
          <View style={styles.measures}>
            <View style={styles.measure}>
              <Text style={styles.whiteText}>{pokemon.height / 10} M</Text>
              <View style={styles.measureTitle}>
                <Icon name="ruler" color={"#fff"} size={12} />
                <Text style={styles.indicator}>Altura</Text>
              </View>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.measure}>
              <Text style={styles.whiteText}>{pokemon.height / 10} Kg</Text>
              <View style={styles.measureTitle}>
                <Icon name="weight" color={"#fff"} size={12} />
                <Text style={styles.indicator}>Peso</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 80,
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 5,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  favorite: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignContent: "center",
    alignItems: "center",
    padding: 5,
    marginLeft: 135,
    paddingTop: 5,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 15,
  },
  measures: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#6c757d",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
  },
  separator: {
    height: "80%",
    width: 1,
    backgroundColor: "#fff",
  },
  measure: {
    gap: 5,
    alignContent: "center",
    alignItems: "center",
  },
  measureTitle: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 5,
  },
  indicator: {
    color: "#fff",
    fontSize: 10,
  },
  whiteText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 170,
    height: 170,
    bottom: 2,
    right: 5,
    top: -15,
    marginBottom: -25,
  },
});
