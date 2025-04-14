import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View style={styles.center}>
      <View style={styles.bg} />
      <View style={styles.header}>
        <Text style={styles.title}>Iniciar sesión</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Nombre de usuario"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => console.log("dkakddkd ")}
          style={styles.buttonForm}
        >
          <Text style={styles.buttonText}>Entrar</Text>
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
    height: 200,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1.5 }],
    backgroundColor: "#2196F3",
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
  form: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    marginTop: 65,
    paddingHorizontal: 20,
    paddingVertical: 70,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#fff",
    boxShadow: "5 5 20",
  },
  input: {
    height: 40,
    width: "80%",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 15,
    padding: 10,
  },
  buttonForm: {
    width: "70%",
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#2196F3",
    color: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
});
