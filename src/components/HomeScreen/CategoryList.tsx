import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

type CategoryList = {
  icon: any;
  title: string;
};

const CategoryList = ({ icon, title }: CategoryList) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        color={COLORS.primary}
        size={24}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    backgroundColor: COLORS.surfaceDim,
    borderRadius: 30,
    padding: 15,
    borderWidth: 0.2,
    borderColor: COLORS.outlineVariant,
    marginBottom: 5,
  },
  title: {
    color: COLORS.primary,
  },
});
