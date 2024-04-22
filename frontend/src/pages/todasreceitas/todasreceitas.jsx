import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const FoodItem = ({ item }) => {
  return (
    <View style={styles.foodItemContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: item.imageUri }}
        style={styles.foodItemImage}
      />
      <View style={styles.foodItemTextContainer}>
        <Text style={styles.foodItemName}>{item.name}</Text>
        <Text style={styles.foodItemDetail}>{item.detail}</Text>
        <Text style={styles.foodItemPrice}>{item.price}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{item.rating}</Text>
        <Image
          resizeMode="contain"
          source={{ uri: item.ratingImageUri }}
          style={styles.ratingImage}
        />
      </View>
    </View>
  );
};

const foodItemsData = [
  {
    name: "Picanha",
    detail: "Serve 2 pessoas",
    price: "R$5.99",
    rating: "4.7",
    imageUri: "../../img/picanha.png",
    ratingImageUri: "../../img/estrela.png",
  },
  {
    name: "Picanha",
    detail: "Serve 2 pessoas",
    price: "R$5.99",
    rating: "4.7",
    imageUri: "../../img/picanha.png",
    ratingImageUri: "../../img/estrela.png",
  },
  {
    name: "Picanha",
    detail: "Serve 2 pessoas",
    price: "R$5.99",
    rating: "4.7",
    imageUri: "../../img/picanha.png",
    ratingImageUri: "../../img/estrela.png",
  },
];

const App = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      {foodItemsData.map((item, index) => (
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
  foodItemContainer: {
    backgroundColor: "#161A1D",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginTop: 25,
  },
  foodItemImage: {
    width: 91,
    height: 91,
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

export default App;
