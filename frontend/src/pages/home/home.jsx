// Importações necessárias
import React, { useEffect, useState } from "react";
import { consultarReceitaPorId } from '../../../../backend/services/api-receitas.js'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Card } from '../../components/card/card.jsx'
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native-web";

export default function Home() {
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState({})

  const goTo = {
    Receitas: () => navigation.navigate("Receitas"),
    TodasReceitas: () => navigation.navigate("TodasReceitas"),
    Lista: () => navigation.navigate("Lista")
  }

  function getMainRecipe() {
    consultarReceitaPorId(1).then((receita) => {
      console.log(receita)
      setRecipe(receita)
    })
  }

  useEffect(() => {
    getMainRecipe()
  }, [])

  return (

    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require("../../img/Logo.png")}
      />

      {/* primeira receita  */}
      <ImageBackground source={{ uri: recipe.link_imagem }} style={styles.mainImageContainer} resizeMode="cover">

        {/* 
         
         Não usamos o campo da nota
          
          <Image
            style={styles.nota}
            resizeMode="auto"
            source={require("../../img/nota.png")}
          /> */}

        <Pressable
          style={styles.book}
          onPress={goTo.Receitas}
        >
          <View>
            <Image
              resizeMode="auto"
              source={require("../../img/book.png")}
            />
          </View>
        </Pressable>


        <Text style={styles.title}>{recipe.receita}</Text>

        <Text style={styles.subtitle}>Veja a Receita Clicando no Card</Text>
      </ImageBackground>


      <Text style={styles.title2}>Nossas Opções</Text>



      <View style={styles.slider}>
        <View style={styles.cardContainer}>
          <Card imageName="boi.png" text="bovina" />
          <Card imageName="porco.png" text="suina" />
          <Card imageName="bebidas.png" text="bebidas" />
          {/* <Card imageName="porco.png"/>
            <Card imageName="bebidas.png"/> */}
        </View>
      </View>

      <Pressable

        onPress={goTo.Lista}
        style={styles.button}>
        <Text style={{ color: "white", left: 50, }}>Faça Sua lista</Text>
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
    width: "1000",
    height: "600",
    backgroundColor: "black"
  },
  // nota: {
  //   padding: 0,
  //   position: "absolute",
  //   margin: 10,
  // },
  book: {
    padding: 0,
    position: "absolute",
    marginLeft: 280,
    margintop: 150,
  },
  title: {
    padding: 0,
    marginTop: 110,
    position: "absolute",
    color: "#fff",
    fontSize: 20,
    bottom: 40,
    left: 10,
  },
  subtitle: {
    padding: 0,
    marginTop: 130,
    position: "absolute",
    color: "#fff",
    left: 10,
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
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#A4161A",
    padding: 10,
    borderRadius: 5,
    width: 206,
    height: 54,
    marginTop: 30,

  },
});
