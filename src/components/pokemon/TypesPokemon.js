import { View, Text, StyleSheet } from "react-native";
import React from "react";
import getColorByPokemonType from "../../utils/ColorUtils";
import { capitalizeFirstLetter } from "../../utils/TextUtils";

export default function TypesPokemon(props) {
  const { types } = props;
  const color = (type) => getColorByPokemonType(type);
  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.name}
          style={{ backgroundColor: color(item.type.name), ...styles.pill }}
        >
          <Text style={styles.type}>
            {capitalizeFirstLetter(item.type.name)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  type: { color: "#fff" },
});
