import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors } from "../../../theme";
import Icon from "react-native-vector-icons/FontAwesome5";
import Categories from "../../../components/Categories";
import Recipes from "../../../components/Recipes";
import axios from "axios";

const HomePage = () => {
  const user = useSelector((state) => state.user.userName);
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [filter, setFilter] = useState(null);

  // Use effect hook for combine two functions
  useEffect(() => {
    getRecipes();
    getCategories();
  }, []);

  // Arrow F -> to change category selection
  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  // Arrow F -> Get Categories from API
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Arrow F -> Search Categories from API
  const Filter = (text) => {
    if (!text) {
      handleChangeCategory(activeCategory);
    } else {
      const getFilter = async (name = text) => {
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
          );
          if (response && response.data) {
            setMeals(response.data.meals);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      getFilter();
    }
  };

  // Arrow F -> Get Recipes from API
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#35363B" }}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        {/* Avatar and Icon */}
        <View className="mx-4 mb-3 flex-row justify-between items-center">
          <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
          <TouchableOpacity>
            <Icon
              name="user"
              size={30}
              color={colors.button}
              onPress={() => navigation.navigate("Profile")}
            ></Icon>
          </TouchableOpacity>
        </View>

        {/* Headline Text*/}
        <View className="mx-4 space-y-1 mb-3">
          <View>
            <Text
              style={{ fontSize: hp(2.5), color: "white" }}
              className="font-extrabold text-neutral-800"
            >
              Welcome <Text className="text-[#ff6b00]"> {user}</Text>
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold text-neutral-800 text-[#ff6b00]"
          >
            What would you like to cook today?
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mx-4 mb-3 flex-row items-center border rounded-xl border-white p-[6px]">
          <View className="bg-white rounded-full p-2">
            <MagnifyingGlassIcon
              size={hp(2.5)}
              color={"gray"}
              strokeWidth={3}
            />
          </View>
          <TextInput
            placeholder="Search Your Favourite Food"
            placeholderTextColor={"white"}
            value={filter}
            onChangeText={(text) => {
              Filter(text);
            }}
            style={{ fontSize: hp(1.7), color: "white", marginLeft: 10 }}
            className="flex-1 text-base mb-1 pl-1 tracking-widest"
          ></TextInput>
        </View>

        {/* List of Categories */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            ></Categories>
          )}
        </View>

        {/* Recipes Cards */}
        <View>
          <Recipes meals={meals} categories={categories}></Recipes>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
