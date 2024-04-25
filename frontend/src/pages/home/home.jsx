// Importações necessárias
import React, { useEffect, useRef, useState } from "react";
import { consultarReceitaPorId } from '../../../../backend/services/api-receitas.js';
import Loading from 'react-loading';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Card } from '../../components/card/card.jsx';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState({})
  const loading = useRef(false)

  const goTo = {
    Receitas: () => navigation.navigate("Receitas"),
    TodasReceitas: () => navigation.navigate("TodasReceitas"),
    Pessoas: () => navigation.navigate("Pessoas")
  }

  function getMainRecipe() {
    consultarReceitaPorId(1).then((receita) => {
      loading.current = true
      setRecipe(receita)
      console.log(recipe)
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

      <View style={styles.mainImageContainer}>
        { loading.current
          ?
          <>
            <Image source={{ uri: recipe.link_imagem }} style={styles.mainImage} resizeMode="cover" />
            <Pressable style={styles.book} onPress={goTo.Receitas}>
                <Image
                    resizeMode="auto"
                    source={require("../../img/book.png")}
                    style={styles.book}/> 
              
            </Pressable>
    
            <View style={styles.textContainer}>
              <Text style={styles.title}>{recipe.receita}</Text>
              <Text style={styles.subtitle}>Veja a Receita Clicando no Card</Text>
            </View>
          </> 
          :  <Loading type="bubbles" color="#A4161A" height="100%" width="30%"/> 
          
        }

      </View>

      <Text style={styles.title2}>Nossas Opções</Text>



      <View style={styles.slider}>
        <View style={styles.cardContainer}>
          <Card imageName="boi.png" text="bovina" />
          <Card imageName="porco.png" text="suina" />
          <Card imageName="bebidas.png" text="bebidas" />
        </View>
      </View>

      <Pressable

        onPress={goTo.Pessoas}
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
    alignSelf: 'flex-end',
    margin: 5
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "baseline",
    width: "100%",
    alignItems: "left",
    padding: 10
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
