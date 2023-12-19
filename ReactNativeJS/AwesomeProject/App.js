import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import AppNavigation from "./src/navigation/appNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
}
