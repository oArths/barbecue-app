import { StatusBar } from "expo-status-bar";
import Selecao from "./frontend/src/pages/selecao/selecao";
import Pessoas from "./frontend/src/pages/pessoas/pessoas";
import Lista from  "./frontend/src/pages/lista/lista";
import Inicio from "./frontend/src/pages/inicio/inicio";
import Home from "./frontend/src/pages/home/home"
import Receita from "./frontend/src/pages/receita/receita";
import TodasReceitas from "./frontend/src/pages/todasreceitas/todasreceitas"

import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Stack.Navigator  initialRouteName="Pessoas"  screenOptions={{ headerShown: false }}>

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
