import { StatusBar } from "expo-status-bar";
import Selecao from "./src/pages/selecao/selecao"
import Pessoas from "./src/pages/pessoas/pessoas";
import { View } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import StackRoutes from "./src/Routes/stack.routes"
export default function App () {

  return (
    <View>
     <StatusBar style="light" backgroundColor='transparent' translucent/>
      <Selecao/>
      {/* <NavigationContainer>
      <StackRoutes />
    </NavigationContainer> */}

    </View> 
      
  );
}
