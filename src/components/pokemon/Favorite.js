import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  removePokemonFavoriteApi,
  isPokemonLiked,
} from "../../api/Favorite";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const isLiked = await isPokemonLiked(id);
        setIsFavorite(isLiked);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reload]);

  const reloadFunction = () => {
    setReload((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      reloadFunction();
    } catch (error) {
      throw error;
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      reloadFunction();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={25}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
      solid={isFavorite ? true : false}
    />
  );
}
