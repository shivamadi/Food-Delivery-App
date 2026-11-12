import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LogoutButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name="log-out-outline" size={18} color="#ffb4ab" />
      <Text style={styles.text}>Log out</Text>
    </Pressable>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 999,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "rgba(147, 0, 10, 0.18)",
    borderWidth: 1,
    borderColor: "rgba(255, 180, 171, 0.18)",
    marginTop: 4,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  text: {
    color: "#ffdad6",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});
