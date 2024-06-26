import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function FoodItem({ item }) {
  const { navigate } = useNavigation();

  return (
    <Pressable onPress={() => {
      navigate("Receitas", {id: item._id})
    }}>
      <View style={styles.foodItemContainer}>
        <Image source={{ uri: item.link_image }} style={styles.foodItemImage} />
        <View style={styles.foodItemTextContainer}>
          <Text style={styles.foodItemName}>{item.name}</Text>
          <Text style={styles.foodItemDetail}>
            Server {item.suits ? item.suits : Math.ceil(Math.random() * 3)}{" "}
            pessoas
          </Text>
          <Text style={styles.foodItemPrice}>
            R$ {item.price ? item.price : Math.trunc(Math.random() * 100)},99
          </Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {(Math.random() * 5).toFixed(2)}
          </Text>
          <Image
            resizeMode="contain"
            source={require("../../img/estrela.png")}
            style={styles.ratingImage}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  foodItemContainer: {
    width: "100%",
    height: "auto",

    backgroundColor: "#161A1D",

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    padding: 5,
    marginTop: 30,

    position: "relative",
  },
  foodItemImage: {
    top: -25,
    position: "relative",
    borderRadius: 10,

    width: 130,
    height: 130,
    objectFit: "cover",
  },
  foodItemTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  foodItemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  foodItemDetail: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 5,
  },
  foodItemPrice: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginRight: 5,
  },
  ratingImage: {
    width: 15,
    height: 15,
  },
});
