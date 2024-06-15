// Importações necessárias
import React, { useEffect, useRef, useState } from "react";
import { get_latest_recipe } from "../../services/api-receitas.ba.js";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { Card } from "../../components/card/card.jsx";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();

  const goTo = {
    Receitas: () =>
      navigate("Receitas", {
        id: recipe._id,
      }),
    TodasReceitas: () => navigate("TodasReceitas"),
    Pessoas: () => navigate("Pessoas"),
  };

  function getMainRecipe() {
    get_latest_recipe()
      .then((receita) => {
        setRecipe(receita);
        setLoading(true);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    getMainRecipe();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require("../../img/logo.png")}
      />

      {/* primeira receita  */}

      <View style={styles.mainImageContainer}>
        {loading ? (
          <>
            <Image
              source={{ uri: recipe.link_image }}
              style={styles.mainImage}
              resizeMode="cover"
            />
            <Pressable style={styles.book} onPress={goTo.Receitas}>
              <Image
                source={require("../../img/book.png")}
                style={styles.book}
              />
            </Pressable>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{recipe.name}</Text>
              <Text style={styles.subtitle}>
                Veja a Receita Clicando no Card
              </Text>
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#A4161A" />
        )}
      </View>

      <Text style={styles.title2}>Nossas Opções</Text>

      <View style={styles.slider}>
        <View style={styles.cardContainer}>
          <Card image={require("../../img/boi.png")} text="bovina" />
          <Card image={require("../../img/porco.png")} text="suina" />
          <Card image={require("../../img/bebidas.png")} text="bebidas" />
        </View>
      </View>

      <Pressable onPress={goTo.Pessoas} style={styles.button}>
        <Text style={{ color: "white", left: 50 }}>Faça Sua lista</Text>
        <Image
          style={{ width: 13, height: 11, left: 60 }}
          source={require("../../img/Union.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    position: "absolute",
    top: 70,
    left: 20,
    padding: 20,
  },
  mainImageContainer: {
    display: "flex",
    alignItems: "center",
    width: "95%",
    height: "25%",
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    borderRadius: 15,
  },
  book: {
    objectFit: "contain",
    alignSelf: "flex-end",
    margin: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "baseline",
    width: "100%",
    alignItems: "left",
    padding: 10,
  },
  title: {
    padding: 0,
    color: "#fff",
    fontSize: 20,
  },
  subtitle: {
    padding: 0,
    color: "#fff",
  },
  title2: {
    fontSize: 24,
    textAlign: "left",

    padding: 10,
  },
  bebidas: {
    width: 30,
    height: 56,
  },
  slider: {
    color: "#fff",
    margin: 10,
  },
  cardContainer: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A4161A",
    padding: 10,
    borderRadius: 5,
    width: 206,
    height: 54,
    marginTop: 30,
  },
});
