import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable} from "react-native";

export default function Inicio({navigation: {navigate}}) {

  const goToHome = () => {
    navigate("Home");
  }

  return (
    <Pressable onPress={goToHome} style={styles.container}>
      <View>
        <Image
          source={require("../../img/logo.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Let's go to the barbecue</Text>
      </View>
    </Pressable>
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
