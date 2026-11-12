import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

interface Props {
  title: string;
  price: string;
  rating?: number;
  reviews?: number;
  description?: string;
}

const FoodInfo: React.FC<Props> = ({
  title,
  price,
  rating = 0,
  reviews = 0,
  description,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <View style={styles.rowSmall}>
        <Ionicons name="star" size={14} color={COLORS.primary} />
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        <Text style={styles.reviews}>({reviews})</Text>
      </View>

      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </View>
  );
};

export default FoodInfo;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, paddingTop: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontFamily: "noto-serif",
    fontWeight: "700",
  },
  price: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "plus-jakarta-sans",
  },
  rowSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  rating: {
    color: COLORS.textPrimary,
    marginLeft: 6,
    fontFamily: "plus-jakarta-sans",
    fontWeight: "600",
  },
  reviews: {
    color: COLORS.textSecondary,
    marginLeft: 6,
    fontFamily: "plus-jakarta-sans",
  },
  description: {
    color: COLORS.textSecondary,
    marginTop: 12,
    lineHeight: 20,
    fontFamily: "plus-jakarta-sans",
  },
});
