import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/TextUtils";
import getColorByType from "../../utils/ColorUtils";

export default function HeaderPokemon(props) {
  const { id, name, type, order, image } = props;

  const bgStyles = {
    backgroundColor: getColorByType(type),
    ...styles.bg,
  };

  return (
    <>
      <View style={bgStyles} />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.name}>{capitalizeFirstLetter(name)}</Text>
          <Text style={styles.order}>{`${order}`.padStart(3, 0)}</Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    display: "flex",
    width: "100%",
    height: 350,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1.7 }],
    marginTop: 35,
  },
  container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    gap: 10,
    marginTop: 55,
  },
  title: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-evenly",
  },
  order: {
    color: "#fff",
    backgroundColor: "#adadad",
    width: "20%",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    bottom: 2,
    right: 2,
  },
});
