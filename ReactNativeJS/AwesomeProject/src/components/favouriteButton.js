import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";
import { addDoc } from "firebase/firestore";
import { favourites } from "../config/firebase";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";

export default function FavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleAddFavourite = async ({ item }) => {
    setIsFavourite(!isFavourite);
    let doc = await addDoc(favourites, {
      item: item,
      userId: user.uid,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleAddFavourite}
      className="p-2 rounded-full mr-5 bg-white"
    >
      <HeartIcon
        size={hp(3.5)}
        strokeWidth={4.5}
        color={isFavourite ? "red" : "gray"}
      />
    </TouchableOpacity>
  );
}
