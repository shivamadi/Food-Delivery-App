import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileMenuItemProps = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

const ProfileMenuItem = ({
  title,
  subtitle,
  icon,
  onPress,
}: ProfileMenuItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={20} color="#f2be8c" />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#9c8e82" />
    </Pressable>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 16,
    backgroundColor: "rgba(31, 27, 20, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(212, 163, 115, 0.12)",
  },
  pressed: {
    transform: [{ scale: 0.99 }],
    backgroundColor: "rgba(35, 31, 24, 0.96)",
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(242, 190, 140, 0.08)",
    marginRight: 14,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    color: "#ebe1d6",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
    marginBottom: 2,
  },
  subtitle: {
    color: "#d4c4b7",
    fontSize: 13,
    lineHeight: 18,
  },
});
