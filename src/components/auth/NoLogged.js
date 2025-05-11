import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function NoLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <View style={styles.bg} />
      <View style={styles.header}>
        <Text style={styles.title}>Ups!</Text>
        <Text style={styles.titleShort}>
          Parece que no haz iniciado sesión!
        </Text>
      </View>
      <View style={styles.message}>
        <Icon name="info-circle" color="#dc3545" size={50} />
        <Text style={styles.messageText}>
          Para poder acceder a esta sección es necesario que inicies sesión
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Account")}
          style={styles.button}
        >
          <View style={styles.buttonCenter}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
            <Icon name="sign-in-alt" color="#fff" size={17} />
          </View>
        </TouchableOpacity>
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
    backgroundColor: "#dc3545",
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
    marginTop: 65,
    paddingHorizontal: 20,
    paddingTop: 65,
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
  messageText: {
    fontSize: 20,
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
