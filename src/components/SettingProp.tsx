import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { ComponentProps } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

interface SettingPropInterface {
  icon: ComponentProps<typeof Ionicons>["name"];
  title: string;
  color?: string;
}

const SettingProp = ({ icon, title, color = "#333" }: SettingPropInterface) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.row}>
        <View style={styles.left}>
          <Ionicons name={icon} size={36} color={color} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          <AntDesign name="right" color="#9AA0A6" size={18} />
        </View>
      </View>
      <View style={styles.divider} />
    </Pressable>
  );
};

export default SettingProp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
    color: "#111",
  },
  right: {
    width: 24,
    alignItems: "flex-end",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    marginTop: 8,
  },
  pressed: {
    opacity: 0.85,
  },
});
