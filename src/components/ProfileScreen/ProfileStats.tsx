import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileStatsItem = {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
};

type ProfileStatsProps = {
  items: ProfileStatsItem[];
};

const ProfileStats = ({ items }: ProfileStatsProps) => {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <View key={item.label} style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name={item.icon} size={18} color="#f2be8c" />
          </View>
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
  },
  card: {
    flexBasis: "48%",
    minWidth: 140,
    borderRadius: 20,
    padding: 16,
    backgroundColor: "rgba(31, 27, 20, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(212, 163, 115, 0.14)",
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(242, 190, 140, 0.08)",
    marginBottom: 12,
  },
  value: {
    color: "#ebe1d6",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 2,
  },
  label: {
    color: "#d4c4b7",
    fontSize: 13,
    lineHeight: 18,
  },
});
