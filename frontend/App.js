import { StatusBar } from "expo-status-bar";
import Pessoas from "./src/pages/pessoas/pessoas";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Pessoas />
    </View>
  );
}
