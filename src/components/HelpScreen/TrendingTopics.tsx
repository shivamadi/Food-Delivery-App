import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

type Title = {
  title: string;
};

const TrendingTopics = ({ title }: Title) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="arrow-forward" color={COLORS.secondary} size={20} />
    </Pressable>
  );
};

export default TrendingTopics;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: COLORS.surfaceContainerLow,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    borderColor: COLORS.surfaceBright,
    marginTop: 10,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
