import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
// import { ChevronLeftIcon as ChevronLeftIconOutline } from "react-native-heroicons/outline";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="ml-2" onPress={() => navigation.goBack()}>
      <Icon name="backspace" size={40} color={colors.button} />
      {/* <ChevronLeftIconOutline size={30} color={colors.button} /> */}
    </TouchableOpacity>
  );
}
