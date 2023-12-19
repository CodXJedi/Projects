import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  Linking,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserName } from "../../../redux/slice/userSlice";
import Icon from "react-native-vector-icons/FontAwesome5";
import LottieView from "lottie-react-native";
import app from "../../../config/firebase";

const LoginPage = ({ navigation }) => {
  const animation = useRef(null);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const handleSend = async () => {
    if (email && password) {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUserName(name));
    } else {
      // navigation.navigate("Home");
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
          <Text style={styles.title}>Login</Text>
          <View style={{ borderRadius: 20 }}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 440,
              }}
              source={require("../../../../assets/lottie/ff.json")}
            />
          </View>
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
          <Text
            style={{
              color: "#ff6b00",
              marginBottom: 10,
              marginTop: -10,
              position: "relative",
              right: -110,
            }}
            onPress={() => Linking.openURL("http://facebook.com")}
          >
            Forgot Password?
          </Text>
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
            onPress={() => handleSend()}
          >
            {({ pressed }) => (
              <Text style={styles.buttontext}>
                {pressed ? <Text></Text> : "Login"}
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
            Not Registered Yet?{" "}
            <Text
              style={{
                color: "#ff6b00",
                marginBottom: 10,
                marginTop: -10,
                position: "relative",
                right: -110,
              }}
              onPress={() => navigation.navigate("Registration")}
            >
              Register Now
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
    fontFamily: "Roboto_400Regular_Italic",
    color: "#fff",
    fontSize: 45,
  },
  p: {
    // fontFamily: "Roboto_400Regular_Italic",
    color: "#fff",
    fontSize: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginBottom: 5,
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
export default LoginPage;
