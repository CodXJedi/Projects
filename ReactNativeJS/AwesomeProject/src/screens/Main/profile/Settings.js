import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Settings() {
  const navigation = useNavigation();
  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 50,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-2 rounded-full ml-5 bg-white"
      >
        <ArrowSmallLeftIcon
          size={hp(3.5)}
          // strokeWidth={4.5}
          color="black"
        />
      </TouchableOpacity>
      <View>
        <Text>Settings Page</Text>
      </View>
    </ScrollView>
  );
}
