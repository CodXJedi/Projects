import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import RecipesCard from "./RecipesCard";
import MasonryList from "@react-native-seoul/masonry-list";
import Loading from "./Loading";

// Function get props from Home Page
export default function Recipes({ meals, categories }) {
  const navigation = useNavigation();
  const Txt = "Recipes";
  return (
    <View className="mx-4 space-y-4">
      {/* Headline text  */}
      <Text
        style={{
          fontSize: hp(2),
          color: "white",
        }}
        className="font-semibold text-neutral-600 mt-10"
      >
        {meals == null ? 0 + " " + Txt : meals.length + " " + Txt}
      </Text>

      {/*  Map the categories from API */}
      <View>
        {categories.length == 0 || meals.length == 0 ? (
          <Loading />
        ) : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <RecipesCard item={item} index={i} navigation={navigation} />
            )}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}
