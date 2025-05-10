import { StyleSheet, View, Platform } from "react-native";
import React from "react";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return (
    <View style={styles.container}>{auth ? <UserData /> : <LoginForm />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 35 : 0,
    paddingBottom: Platform.OS === "android" ? 20 : 0,
  },
});
