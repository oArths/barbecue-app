// Importações necessárias
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Receitas");
  };
  
  const onPress2 = () => {
    navigation.navigate("TodasReceitas");
  };

  return (

      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          source={require("../../img/Logo.png")}
        />

        <View style={styles.mainImage}>
          <Image
            style={styles.picanha}
            resizeMode="auto"
            source={require("../../img/picanha.png")}
          />

          <Image
            style={styles.nota}
            resizeMode="auto"
            source={require("../../img/nota.png")}
          />

          <TouchableOpacity
            style={styles.book}
            onPress={onPress}
          >
            <View>
              <Image
                resizeMode="auto"
                source={require("../../img/book.png")}
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>Picanha</Text>

          <Text style={styles.subtitle}>Veja a Receita Clicando no Card</Text>
        </View>


        <Text style={styles.title2}>Nossas Opções</Text>

        

        <View style={styles.slider}>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.boi}
                resizeMode="auto"
                source={require("../../img/boi.png")}
              />
              <Text style={{ color: "white" }}>Bovina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.boi}
                resizeMode="auto"
                source={require("../../img/porco.png")}
              />
              <Text style={{ color: "white" }}>Suina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                style={styles.bebidas}
                resizeMode="auto"
                source={require("../../img/bebidas.png")}
              />
              <Text style={{ color: "white" }}>Bebidas</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
        
        onPress={onPress2}
        style={styles.button}>
          <Text style={{ color: "white", left: 50, }}>Faça Sua lista</Text>
          <Image
            style={{ width: 13, height: 11, left: 60 }}
            source={require("../../img/Union.png")}
          />
        </TouchableOpacity>

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
  picanha: {
    padding: 20,
    position: "relative",
  },
  nota: {
    padding: 0,
    position: "absolute",
    margin: 10,
  },
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
  card: {
    borderRadius: 10,
    paddingTop: 35,
    alignItems: "center",
    width: 112,
    height: 128,
    backgroundColor: "#161A1D",
  },

  boi: {
    width: 60,
    height: 39,
    alignItems: "center",
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
