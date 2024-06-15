import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { get_by_id } from "../../services/api-receitas.ba";
import { IngredientItem } from "../../components/ingredient/ingredient";
import { useState, useEffect } from "react";

export default function Receitas({ route }) {
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  async function searchForId() {
    const id = route.params.id;
    const response = await get_by_id(id);

    setRecipe(response);
    setLoading(true);
  }

  useEffect(() => {
    searchForId();
  }, []);

  return (
    <View>
      {loading ? (
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigate("Home")}
              style={styles.buttonContainer}
            >
              <Image
                resizeMode="contain"
                source={require("../../img/seta.png")}
                style={styles.actionIcon}
              />
            </TouchableOpacity>

            <Image
              resizeMode="auto"
              source={{ uri: recipe.link_image }}
              style={styles.mainImage}
            />

            <View style={styles.recipeTitleContainer}>
              <Text style={styles.recipeTitle}>{recipe.name}</Text>
            </View>
            <View>
              <Text>{recipe.describe}</Text>
            </View>
            <View style={styles.ingredientsHeader}>
              <Text style={styles.ingredientsTitle}>
                Ingredientes{" "}
                <Text style={styles.ingredientsCount}>
                  ({recipe.ingredients.length})
                </Text>
              </Text>
            </View>
            {recipe.ingredients.map((ingredient, index) => (
              <IngredientItem key={index} ingredient={ingredient} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color="#A4161A" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    padding: 20
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
    fontSize: 24,
    fontWeight: "bold",
  },

  descriptionText: {
    marginTop: 13,
    fontSize: 13,
  },
  ingredientsHeader: {
    marginTop: 13,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  ingredientsCount: {
    color: "#E5383B",
  },
});
