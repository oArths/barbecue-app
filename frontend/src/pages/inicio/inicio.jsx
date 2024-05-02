import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";

export default function Inicio() {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <TouchableOpacity onPress={goToHome} style={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          source={require("../../img/Logo.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Let's go to the barbecue</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161A1D",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    minWidth: 100,
    minHeight: 100,
    marginBottom: 20,
    alignSelf: "center"
  },
  text: {
    color: "#FFF",
    fontSize: 24,
  },
});
