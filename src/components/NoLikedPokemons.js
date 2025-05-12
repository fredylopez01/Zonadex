import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function NoLikedPokemons() {
  return (
    <View style={styles.center}>
      <View style={styles.bg} />
      <View style={styles.header}>
        <Text style={styles.title}>Sin favoritos!</Text>
      </View>
      <View style={styles.message}>
        <Image
          source={require("../assets/balbasaur.png")}
          style={styles.image}
        />
        <Text style={styles.messageText}>
          Puede agregar pokemones a sus favoritos pulsando el corazón
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignContent: "center",
    alignItems: "center",
  },
  bg: {
    width: "100%",
    height: 250,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1.5 }],
    backgroundColor: "#0dcaf0",
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    gap: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  titleShort: {
    fontSize: 15,
    color: "#fff",
  },
  message: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 75,
    paddingHorizontal: 20,
    paddingTop: 300,
    paddingBottom: 70,
    width: "85%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  image: {
    width: 250,
    height: 250,
    position: "absolute",
    top: 130,
    left: "30%",
    transform: [{ translate: [-50, -50] }],
    zIndex: 10,
    alignContent: "center",
    alignItems: "center",
  },
  messageText: {
    fontSize: 15,
    width: "90%",
    textAlign: "center",
    fontWeight: "black",
    color: "#000",
    marginVertical: 30,
  },
  button: {
    width: "70%",
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#198754",
    color: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
  buttonCenter: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
});
