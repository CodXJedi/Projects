import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import EmptyList from "../../../components/emptyList";

export default function FavouriteComp({ IsFavourites }) {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <MasonryList
          data={IsFavourites}
          ListEmptyComponent={
            <EmptyList message={"you haven't got any receips yet"} />
          }
          keyExtractor={(item) => item.item.idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => {
            let isEven = IsFavourites.indexOf(item) % 2 == 0;
            return (
              <Pressable
                style={{
                  width: "100%",
                  paddingRight: isEven ? 8 : 0,
                }}
                className="flex justify-center mb-4 space-y-1"
                onPress={() =>
                  navigation.navigate("RecipeDetails", { ...item.item })
                }
              >
                <Image
                  source={{
                    uri: item.item.strMealThumb,
                  }}
                  style={{
                    width: "100%",
                    height:
                      IsFavourites.indexOf(item) % 3 == 0 ? hp(25) : hp(35),
                    borderRadius: 35,
                  }}
                  className="bg-black/5 relative"
                />

                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.9)"]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: hp(20),
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                  }}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                />

                <Text
                  style={{
                    fontSize: hp(2.2),
                  }}
                  className="font-semibold ml-2 text-white absolute bottom-7 left-2 max-w-[80%]"
                >
                  {item.item.strMeal.length > 20
                    ? item.item.strMeal.slice(0, 20) + "..."
                    : item.item.strMeal}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}
