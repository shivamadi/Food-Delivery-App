import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.container}>
        <Ionicons name="location-outline" color={COLORS.primary} size={24} />
        <Text style={styles.header}>Downtown, Metropolis</Text>
      </View>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color={COLORS.primary} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    padding: 10,
  },
  header: {
    color: COLORS.primary,
    marginLeft: 10,
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "600",
  },
});
