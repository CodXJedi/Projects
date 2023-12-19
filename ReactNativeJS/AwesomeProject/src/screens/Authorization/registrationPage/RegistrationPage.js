import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  Linking,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setUserName } from "../../../redux/slice/userSlice";
import Icon from "react-native-vector-icons/FontAwesome5";
import app from "../../../config/firebase";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleSubmit = async () => {
    if (email && password) {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUserName(name));
    } else {
      // navigation.navigate("Home");
      // // no
      // // snackbaar
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("../../../../assets/edgar-castrejon-1SPu0KT-Ejg-unsp.jpg")}
      >
        <View style={styles.inside}>
          <View>
            <Image
              style={{
                width: 136,
                height: 136,
              }}
              source={require("../../../../assets/chef.png")}
            />
          </View>
          <Text style={styles.h1}>KHANA RECIPE</Text>
          <Text style={styles.p}>Cook in ease way</Text>
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputView}>
            <Icon name="user" size={20} color="#fff" />
            <TextInput
              style={styles.inputText}
              placeholder="Full Name"
              placeholderTextColor="#fff"
              value={name}
              onChangeText={setName}
              autoCapitalize={"none"}
            />
          </View>
          <View style={styles.inputView}>
            <Icon name="envelope" size={20} color="#fff" />
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#fff"
              value={email}
              onChangeText={setEmail}
              autoCapitalize={"none"}
            />
          </View>
          <View style={styles.inputView}>
            <Icon name="key" size={20} color="#fff" />
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="#fff"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputView}>
            <Icon name="key" size={20} color="#fff" />
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor="#fff"
              value={confirmpassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 20,
              width: "25%",
              justifyContent: "space-between",
            }}
          >
            <Icon.Button
              style={{ paddingLeft: 10, paddingRight: 2 }}
              name="twitter"
              backgroundColor="#3b5970"
              onPress={() => Linking.openURL("http://twitter.com")}
            >
              {/* Sign in with Twitter */}
            </Icon.Button>
            <Icon.Button
              style={{ paddingLeft: 10, paddingRight: 3 }}
              name="facebook-square"
              backgroundColor="#3b5998"
              onPress={() => Linking.openURL("http://facebook.com")}
            >
              {/* Sign in with Facebook */}
            </Icon.Button>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#ff6b00" : "transparent",
              },
              styles.button,
            ]}
            onPress={handleSubmit}
          >
            {({ pressed }) => (
              <Text style={styles.buttontext}>
                {pressed ? <Text></Text> : "Registration"}
              </Text>
            )}
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              color: "white",
              marginBottom: 10,
              marginTop: -10,
              position: "relative",
              right: -110,
              fontWeight: "bold",
            }}
          >
            Already Registered?{" "}
            <Text
              style={{
                color: "#ff6b00",
                marginBottom: 10,
                marginTop: -10,
                position: "relative",
                right: -110,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Login Now
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  inside: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    color: "#fff",
    fontSize: 45,
  },
  p: {
    color: "#fff",
    fontSize: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
    marginTop: 40,
  },
  inputView: {
    width: "80%",
    // backgroundColor: "transparent",
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  inputText: {
    height: 50,
    color: "white",
    flex: 1,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0",
    left: "0",
  },
  button: {
    borderRadius: 15,
    padding: 2,
    height: 50,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttontext: {
    fontSize: 25,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    padding: 10,
  },
});
export default RegistrationPage;
