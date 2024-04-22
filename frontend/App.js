import { StatusBar } from "expo-status-bar";
import Selecao from "./src/pages/selecao/selecao";
import Pessoas from "./src/pages/pessoas/pessoas";
import Lista from  "./src/pages/lista/lista";
import Inicio from "./src/pages/inicio/inicio";
import Home from "./src/pages/home/home"
import Receita from "./src/pages/receita/receita";
import TodasReceitas from "./src/pages/todasreceitas/todasreceitas"

import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Stack.Navigator  initialRouteName="Inicio"  screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="Pessoas"
            component={Pessoas}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Selecao"
            component={Selecao}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Lista"
            component={Lista}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: null }}
          />
          <Stack.Screen
            name="Receitas"
            component={Receita}
            options={{ title: null }}
          />
          <Stack.Screen
            name="TodasReceitas"
            component={TodasReceitas}
            options={{ title: null }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
