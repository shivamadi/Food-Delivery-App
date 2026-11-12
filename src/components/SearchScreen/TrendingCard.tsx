import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

interface TrendingCardProps {
  id: string;
  title: string;
  description?: string;
  price: string;
  rating: number;
  reviewCount: number;
  image?: string;
  onPress?: (id: string) => void;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  id,
  title,
  description,
  price,
  rating,
  reviewCount,
  image,
  onPress,
}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (onPress) {
      onPress(id);
      return;
    }

    (navigation as any).navigate("Details", {
      image,
      title,
      price,
      description,
      rating,
      reviews: reviewCount,
    });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      <View style={styles.content}>
        <View style={styles.titleSection}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        {description && (
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        )}

        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <Ionicons
              name="star"
              size={14}
              color={COLORS.primary}
              style={styles.star}
            />
            <Text style={styles.rating}>{rating.toFixed(1)}</Text>
            <Text style={styles.reviewCount}>({reviewCount})</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 12,
    overflow: "hidden",
    elevation: 1,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardPressed: {
    backgroundColor: COLORS.surfaceContainerHigh,
    elevation: 2,
    shadowOpacity: 0.1,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 12,
    backgroundColor: COLORS.surfaceContainerHigh,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleSection: {
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textPrimary,
    fontFamily: "plus-jakarta-sans",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
    fontFamily: "plus-jakarta-sans",
  },
  description: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontFamily: "plus-jakarta-sans",
    marginBottom: 6,
    lineHeight: 16,
  },
  footer: {
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  star: {
    marginRight: 2,
  },
  rating: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textPrimary,
    fontFamily: "plus-jakarta-sans",
  },
  reviewCount: {
    fontSize: 11,
    color: COLORS.textSecondary,
    fontFamily: "plus-jakarta-sans",
  },
});
