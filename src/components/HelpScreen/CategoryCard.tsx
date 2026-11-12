import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

interface CategoryCard {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCard) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        borderWidth: 1,
        width: width * 0.42,
        backgroundColor: COLORS.surfaceContainerLow,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginLeft: 15,
        paddingVertical: 25,

        marginTop: 15,
        borderRadius: 10,
        borderColor: COLORS.surfaceBright,
      }}
    >
      <View
        style={{
          // borderWidth: 1,
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.onPrimaryContainer,
          marginBottom: 10,
        }}
      >
        <Ionicons
          name={icon}
          color={COLORS.secondary}
          size={30}
          style={{ padding: 10 }}
        />
      </View>
      <Text
        style={{
          color: COLORS.secondary,
          fontSize: 15,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
