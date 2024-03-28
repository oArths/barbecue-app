import { StatusBar } from "expo-status-bar";
import Home from "./src/pages/pessoas/pessoas";
import { View } from "react-native";
// rotas
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home/>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
}
