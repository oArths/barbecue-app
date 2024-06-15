import { View, Text, StyleSheet } from "react-native";

export const IngredientItem = ({ ingredient }) => {
  return (
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientName}>
        {ingredient}
      </Text>

      {/* adiciona a quantidade caso o ingrediente tiver */}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});
