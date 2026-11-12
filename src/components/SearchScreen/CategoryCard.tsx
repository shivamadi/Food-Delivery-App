import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../constants/colors";

interface CategoryCardProps {
  id: string;
  title: string;
  image?: string;
  backgroundColor?: string;
  onPress?: (id: string, title: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  image,
  backgroundColor = COLORS.surfaceContainerHigh,
  onPress,
}) => {
  const { width } = useWindowDimensions();
  const cardWidth = (width - 52) / 2; // 20px padding on each side + 12px gap

  return (
    <Pressable
      onPress={() => onPress?.(id, title)}
      style={({ pressed }) => [
        styles.card,
        {
          width: cardWidth,
          opacity: pressed ? 0.85 : 1,
        },
      ]}
    >
      {image ? (
        <>
          <Image
            source={{ uri: image }}
            style={[styles.image, { width: cardWidth }]}
          />
          <View style={styles.overlay} />
        </>
      ) : (
        <View style={[styles.image, { backgroundColor, width: cardWidth }]} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: COLORS.surface,
    elevation: 2,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  image: {
    height: 160,
    backgroundColor: COLORS.surfaceContainerHigh,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: 160,
    backgroundColor: COLORS.background,
    opacity: 0.05,
  },
  content: {
    padding: 12,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.textPrimary,
    fontFamily: "noto-serif",
  },
});
