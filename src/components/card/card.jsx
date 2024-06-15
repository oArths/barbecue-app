import { useNavigation } from "@react-navigation/native";
import { Pressable, Image, Text, StyleSheet } from "react-native";

export const Card = ({ text, image }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("TodasReceitas")}
      style={styles.card}
    >
      <Image
        style={styles.imageCard}
        resizeMode="auto"
        source={image}
      />
      <Text style={styles.textCard}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: 5,
    position: "relative",
    borderRadius: 10,
    alignItems: "center",
    width: 112,
    height: 128,
    backgroundColor: "#161A1D",
  },

  imageCard: {
    maxWidth: "60%",
    maxHeight: "60%",
    objectFit: "scale-down",
  },

  textCard: {
    color: "white"
  }
});
