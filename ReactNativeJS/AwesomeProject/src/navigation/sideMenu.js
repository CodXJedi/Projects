import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/Main/homePage/HomePage";
export default function SideMenu() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      {/* {/* <Drawer.Screen name="Feed" component={Feed} /> */}
      <Drawer.Screen name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
}
