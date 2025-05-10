import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";

export default function Favorite(props) {
  const { id } = props;

  const addToFavorites = () => {
    console.log("Añadir a favoritos");
  };

  return (
    <View>
      <Text>Favorite</Text>
      <Icon
        name="heart"
        color="#fff"
        size={24}
        onPress={addToFavorites}
        style={{ marginRight: 24 }}
      />
    </View>
  );
}
