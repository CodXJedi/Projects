import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import RegistrationPage from "../screens/Authorization/registrationPage/RegistrationPage";
import HomePage from "../screens/Main/homePage/HomePage";
import LoginPage from "../screens/Authorization/loginPage/LoginPage";
import RecipeDetailsPage from "../screens/Main/RecipeDetailsPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../config/firebase";
import { setUser } from "../redux/slice/userSlice";
import ProfilePage from "../screens/Main/profile/ProfilePage";
import Settings from "../screens/Main/profile/Settings";

// import SideMenu from "./sideMenu";
const auth = getAuth(app);

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (u) => {
    dispatch(setUser(u));
  });

  if (user) {
    return (
      <NavigationContainer>
        {/* <SideMenu></SideMenu> */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="RecipeDetails"
            component={RecipeDetailsPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={ProfilePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        {/* <SideMenu></SideMenu> */}
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
