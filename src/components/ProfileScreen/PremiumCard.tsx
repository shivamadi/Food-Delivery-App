import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PremiumCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <Ionicons name="cafe-outline" size={14} color="#f2be8c" />
          <Text style={styles.badgeText}>Premium reward plan</Text>
        </View>
        <Ionicons name="sparkles-outline" size={18} color="#d4a373" />
      </View>

      <Text style={styles.title}>Latte Club Gold</Text>
      <Text style={styles.description}>
        Earn points with every order, unlock seasonal perks, and enjoy priority
        support in a warm café-inspired membership experience.
      </Text>

      <View style={styles.footerRow}>
        <View>
          <Text style={styles.footerLabel}>Points to next reward</Text>
          <Text style={styles.footerValue}>550 pts</Text>
        </View>

        <View style={styles.ctaPill}>
          <Text style={styles.ctaText}>View perks</Text>
        </View>
      </View>
    </View>
  );
};

export default PremiumCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    backgroundColor: "rgba(35, 31, 24, 0.96)",
    borderWidth: 1,
    borderColor: "rgba(240, 189, 139, 0.18)",
    marginBottom: 18,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "rgba(242, 190, 140, 0.1)",
  },
  badgeText: {
    color: "#f2be8c",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  title: {
    color: "#ebe1d6",
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 8,
  },
  description: {
    color: "#d4c4b7",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  footerLabel: {
    color: "#9c8e82",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 4,
  },
  footerValue: {
    color: "#ebe1d6",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 26,
  },
  ctaPill: {
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 11,
    backgroundColor: "#d4a373",
  },
  ctaText: {
    color: "#2c1600",
    fontSize: 13,
    fontWeight: "700",
  },
});
