import { View, ActivityIndicator } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

export default function Loading(props) {
  const animation = useRef(null);
  return (
    <View
      className="flex-1 justify-center items-center"
      style={{ height: "auto" }}
    >
      {/* <ActivityIndicator {...props} /> */}
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 450,
        }}
        source={require("../../assets/lottie/waitingRecipe.json")}
      />
    </View>
  );
}
