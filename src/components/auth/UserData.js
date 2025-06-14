import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import useAuth from "../../hooks/useAuth";
import { getPokemonsFavoriteApi } from "../../api/Favorite";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(125);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const likedPokemons = await getPokemonsFavoriteApi();
          setTotal(likedPokemons.length);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.bg} />
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      </View>
      <View style={styles.titleBlock}>
        <Text style={styles.welcome}>
          Bienvenido, {`${auth.firstName} ${auth.lastName}`}
        </Text>
      </View>
      <View style={styles.image}>
        <Icon name="user-circle" color="#fff" size={89} />
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <TouchableOpacity onPress={logout} style={styles.buttonLogout}>
        <View style={styles.buttonCenter}>
          <Text style={styles.buttonText}>Desconectarse</Text>
          <Icon name="sign-out-alt" color="#fff" size={17} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text style={styles.itemMenuText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
  bg: {
    width: "100%",
    height: 250,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1.5 }],
    backgroundColor: "#20c997",
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    marginTop: 10,
  },
  titleBlock: {
    marginBottom: 30,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 22,
    marginHorizontal: "auto",
    color: "white",
  },
  image: {
    width: 93,
    height: 93,
    position: "absolute",
    top: 170,
    left: "50%",
    transform: [{ translate: [-50, -50] }],
    backgroundColor: "#20c997",
    borderRadius: 50,
    zIndex: 10,
    alignContent: "center",
    alignItems: "center",
  },
  dataContent: {
    width: "90%",
    marginBottom: 20,
    marginTop: 50,
    marginHorizontal: "auto",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 15,
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
  itemMenu: {
    flexDirection: "colum",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
    marginBottom: 10,
  },
  itemMenuTitle: {
    fontSize: 13,
  },
  itemMenuText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  buttonLogout: {
    width: "70%",
    height: 45,
    marginTop: 20,
    marginHorizontal: "auto",
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#2196F3",
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
