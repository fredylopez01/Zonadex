import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { use, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/UserDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
      }
    },
  });

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
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <Text style={styles.error}>{formik.errors.username}</Text>
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <Text style={styles.error}>{formik.errors.password}</Text>
        <TouchableOpacity
          onPress={formik.handleSubmit}
          style={styles.buttonForm}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
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
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  input: {
    height: 40,
    width: "80%",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 15,
    padding: 10,
  },
  error: {
    textAlign: "justify",
    color: "#f00",
    marginTop: 15,
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
