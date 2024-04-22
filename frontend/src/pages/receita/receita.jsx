import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const IngredientItem = ({ name, quantity }) => (
  <View style={styles.ingredientContainer}>
    <Text style={styles.ingredientName}>{name}</Text>
    <Text style={styles.ingredientQuantity}>{quantity}</Text>
  </View>
);

const ingredients = [
  { name: "Ingrediente", quantity: "1" },
  { name: "Ingrediente", quantity: "1" },
  { name: "Ingrediente", quantity: "1" },
];

export default function Receita() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.buttonContainer}
        >
          <Image
            resizeMode="auto"
            source={require("../../img/seta.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>

        <Image
          resizeMode="auto"
          source={require("../../img/picanha.png")}
          style={styles.mainImage}
        />

        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>Picanha</Text>
        </View>
        <Text style={styles.descriptionText}>
          lorem is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has{" "}
        </Text>
        <View style={styles.ingredientsHeader}>
          <Text style={styles.ingredientsTitle}>
            Ingredientes <Text style={styles.ingredientsCount}>(12)</Text>
          </Text>
        </View>
        {ingredients.map((ingredient, index) => (
          <IngredientItem
            key={index}
            name={ingredient.name}
            quantity={ingredient.quantity}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionIcon: {
    marginTop: 36,
    width: 24,
    height: 28,
  },
  mainImage: {
    marginTop: 35,
    width: "100%",
    height: 200,
  },
  recipeTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  recipeTitle: {
    fontFamily: "Lato, sans-serif",
    fontSize: 24,
    fontWeight: "bold",
  },

  descriptionText: {
    marginTop: 13,
    fontFamily: "Lato, sans-serif",
    fontSize: 13,
  },
  ingredientsHeader: {
    marginTop: 13,
  },
  ingredientsTitle: {
    fontFamily: "Lato, sans-serif",
    fontSize: 18,
    fontWeight: "800",
  },
  ingredientsCount: {
    color: "#E5383B",
  },
  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#161A1D",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  ingredientName: {
    color: "#FFF",
    fontFamily: "Lato, sans-serif",
  },
  ingredientQuantity: {
    color: "#FFF",
    fontFamily: "Lato, sans-serif",
  },
});
