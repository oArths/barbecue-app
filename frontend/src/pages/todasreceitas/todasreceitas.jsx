import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { pesquisarReceitaPorNome } from "../../../../backend/services/api-receitas";
import FoodItem from "../../components/foodItem/foodItem"


export default function TodasReceitas({ navigation: { navigate } }) {

  const [recipes, setRecipes] = useState([]);

  async function searchRecipes(recipeName) {
    console.log(recipeName)
    const receitasEncontradas = await pesquisarReceitaPorNome(recipeName)
    setRecipes(receitasEncontradas)
    console.log(receitasEncontradas)
  }

  useEffect(() => {
    searchRecipes('')
  }, [])

  const goToHome = () => {
    navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable
        onPress={goToHome}
        style={styles.buttonContainer}
      >
        <Image
          source={require("../../img/seta.png")}
          style={styles.actionIcon}
        />
      </Pressable>

      <TextInput
        style={styles.searchContainer}
        placeholder="Pesquise sua receita"
        onChangeText={(text) => searchRecipes(text)}
      ></TextInput>

      <Text style={styles.sectionTitle}>Receitas</Text>
      <View style={styles.divider} />
      {recipes.length != 0 &&
          recipes.map((item, index) => (
            <FoodItem
              key={index}
              item={item}
            />
        ))}
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    alignItems: "stretch",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 36,
  },
  headerTime: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0B090A",
  },
  headerImage: {
    width: 67,
    height: 12,
  },
  headerLogo: {
    width: 28,
    height: 25,
    marginLeft: 11,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1)",
    borderRadius: 10,
    marginTop: 48,
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
  searchIcon: {
    width: 17,
    height: 17,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#161A1D",
    marginTop: 37,
  },
  divider: {
    height: 1,
    backgroundColor: "#B1A7A6",
    marginVertical: 27,
  },

  bottomSpacer: {
    height: 117,
  },
  buttonContainer: {
    top: 20,
    left: 0,
    marginTop: 10,
  },
  actionIcon: {
    height: 24,
    width: 28,
  },
});

