import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
 
const IngredientItem = ({ ingredient }) => {

  return (
    <View style={styles.ingredientContainer} >
      
      <Text style={styles.ingredientName}>{ingredient.replace(/[0-9]g|de|do|da/g,"").trim()}</Text>

      {/* adiciona a quantidade caso o ingrediente tiver */}
      {ingredient.search(/\d+/) > -1 &&
        <Text style={styles.ingredientQuantity}>{ingredient.replace(/[^0-9g]/g,"").trim()}</Text>
      }
    </View>
  )

}


export default function Receitas({ navigation: { navigate }, route }) {

  console.log(route.params.receita)
  const receita = route.params.receita
  const ingredients = receita.ingredientes.split(",").map((ingredient) => ingredient.trim())

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigate("Home")}
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
          source={{ uri: receita.link_imagem }}
          style={styles.mainImage}
        />

        <View style={styles.recipeTitleContainer}>
          <Text style={styles.recipeTitle}>{receita.receita}</Text>
        </View>
        <Text style={styles.descriptionText}>
          { }
        </Text>
        <View style={styles.ingredientsHeader}>
          <Text style={styles.ingredientsTitle}>
            Ingredientes <Text style={styles.ingredientsCount}>({ingredients.length})</Text>
          </Text>
        </View>
        {ingredients.map((ingredient, index) => (
          <IngredientItem
            key={index}
            ingredient={ingredient}
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
