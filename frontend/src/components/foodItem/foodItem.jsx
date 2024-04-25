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
import { consultarTodasReceitas, pequisarReseita } from "../../../../backend/services/api-receitas";
import { useNavigation } from "@react-navigation/native";


export default function foodItem ({ item }) {
    return (
      <View style={styles.foodItemContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: item.imageUri }}
          style={styles.foodItemImage}
        />
        <View style={styles.foodItemTextContainer}>
          <Text style={styles.foodItemName}>{item.receita}</Text>
          <Text style={styles.foodItemDetail}>{item.ingredientes}</Text>
          <Text style={styles.foodItemPrice}>{Math.random() * 100}</Text>
        </View>

        {/* incompleto */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
          <Image
            resizeMode="contain"
            source={{ uri: item.link_imagem }}
            style={styles.ratingImage}
          />
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({
  
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
}) 