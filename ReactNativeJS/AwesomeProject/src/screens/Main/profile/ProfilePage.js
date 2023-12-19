import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { getAuth, signOut } from "firebase/auth";
import app, { favourites } from "../../../config/firebase";
import {
  HomeIcon,
  Cog6ToothIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { ArrowRightOnRectangleIcon } from "react-native-heroicons/outline";
import FavouriteComp from "./FavouriteComp";
import { useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getDocs, query, where } from "firebase/firestore";

export default function ProfilePage() {
  const navigation = useNavigation();
  const [postCount, setPostCount] = useState(IsFavourites);
  const [IsFavourites, setFavourites] = useState([]);
  const [imgURL, setImgURL] = useState(
    "https://bootdey.com/img/Content/avatar/avatar1.png"
  );
  const auth = getAuth(app);
  const userName = useSelector((state) => state.user.userName);
  const { user } = useSelector((state) => state.user);

  const isFocused = useIsFocused();

  const fetchFavourites = async () => {
    const q = query(favourites, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      console.log("doc str==", doc.data());
      data.push({ ...doc.data(), id: doc.id });
    });
    setFavourites(data);
  };

  useEffect(() => {
    if (isFocused) fetchFavourites();
  }, [isFocused]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#35363B" }}
    >
      {/* Header icons */}
      <View style={styles.container}>
        <View className="w-full flex-row pt-14 justify-between items-center ">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="p-3 rounded-full ml-5 bg-white"
          >
            <HomeIcon size={hp(3.5)} strokeWidth={4.5} color="#ff6b00" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            className="p-3 rounded-full mr-5 bg-white"
          >
            <ArrowRightOnRectangleIcon
              size={hp(3.5)}
              strokeWidth={2.5}
              color="#ff6b00"
            />
          </TouchableOpacity>
        </View>

        {/* Header Image and Info*/}

        <View style={styles.header}>
          {/* Avatar + Settings*/}
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: imgURL,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("Settings")}
              style={{ position: "absolute", bottom: 0, right: 0 }}
              className="p-2 rounded-full bg-white"
            >
              <Cog6ToothIcon size={hp(3.5)} strokeWidth={3.5} color="#ff6b00" />
            </TouchableOpacity>
          </View>

          {/* User Info */}
          <View style={styles.headerContent}>
            {/* User Name */}
            <Text style={styles.name}>{userName}</Text>
            {/* User Spec */}
            <Text style={styles.name}>Interior designer</Text>
            {/* User Location */}
            <View
              style={{
                flexDirection: "row",
                marginVertical: 6,
                alignItems: "center",
              }}
            >
              <MapPinIcon name="location-on" size={hp(3.5)} color="white" />
              <Text style={styles.text}>Lagos, Nigeria</Text>
            </View>

            <View
              style={{
                paddingVertical: 8,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginHorizontal: "auto",
                  marginRight: 15,
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                }}
              >
                <Text style={styles.text}>122</Text>
                <Text style={styles.text}>Followers</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginHorizontal: "auto",
                  marginRight: 15,
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                }}
              >
                <Text style={styles.text}>67</Text>
                <Text style={styles.text}>Followings</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginHorizontal: "auto",
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                }}
              >
                <Text style={styles.text}>77K</Text>
                <Text style={styles.text}>Likes</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Favourites section*/}
        <View>
          <Text
            style={{ fontSize: hp(3) }}
            className="font-bold flex-1 text-neutral-700 ml-5 mb-5 text-[#ff6b00]"
          >
            Favourites Receips
          </Text>

          <FavouriteComp IsFavourites={IsFavourites} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 30,
    marginBottom: 10,
  },
  headerContent: {
    alignItems: "center",
    color: "white",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0",
    left: "0",
  },
  name: {
    fontSize: 22,
    color: "#ff6b00",
    fontWeight: "600",
  },
  text: {
    fontSize: 15,
    color: "#ff6b00",
    fontWeight: "400",
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  statsBox: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  statsCount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  statsLabel: {
    fontSize: 14,
    color: "#999999",
  },
  body: {
    alignItems: "center",
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "33%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 120,
  },
});
