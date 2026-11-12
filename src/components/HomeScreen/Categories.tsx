import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryList from "./CategoryList";
import { COLORS } from "../../constants/colors";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.category}
      >
        <CategoryList icon="cafe-outline" title="coffee" />
        <CategoryList icon="basket-outline" title="Bakery" />
        <CategoryList icon="leaf-outline" title="Healthy" />
        <CategoryList icon="fast-food-outline" title="Brunch" />
        <CategoryList icon="beer-outline" title="Sweet" />
        <CategoryList icon="cafe-outline" title="coffee" />
        <CategoryList icon="cafe-outline" title="coffee" />
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  heading: {
    color: COLORS.secondary,
    fontSize: 24,
    fontWeight: "600",
  },
  category: {},
});
