import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { consultarTodasReceitas, pequisarReceita } from "../../../../backend/services/api-receitas";
import { useNavigation } from "@react-navigation/native";
import FoodItem from "../../components/foodItem/foodItem"


export default function TodasReceitas() {

  const [recipes, setRecipes] = useState([]);

  const navigation = useNavigation();

  function getRecipes() {
    consultarTodasReceitas().then(receitasEncontradas => {
      console.log(receitas)
      setReceitas(receitasEncontradas)
    })
  }

  function searchRecipes() {
    consultarTodasReceitas().then(receitasEncontradas => {
      console.log(receitas)
      setReceitas(receitasEncontradas)
    })
  }

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={goToHome}
        style={styles.buttonContainer}
      >
        <Image
          resizeMode="auto"
          source={require("../../img/seta.png")}
          style={styles.actionIcon}
        />
      </TouchableOpacity>

      {/* <Image
        resizeMode="contain"
        source={require("../../img/lupa.png")}
        style={styles.searchIcon}
      /> */}

      <TextInput
        style={styles.searchContainer}
        placeholder="Pesquise sua receita"
      ></TextInput>

      <Text style={styles.sectionTitle}>Receitas</Text>
      <View style={styles.divider} />
      {recipes.map((item, index) => (
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
    padding: 18,
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

