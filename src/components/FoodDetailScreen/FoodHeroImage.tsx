import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

interface Props {
  image?: string;
  onBack?: () => void;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

const FoodHeroImage: React.FC<Props> = ({
  image,
  onBack,
  onFavorite,
  isFavorite,
}) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const pressFav = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.92,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
    onFavorite?.();
  };

  return (
    <ImageBackground
      source={image ? { uri: image } : undefined}
      style={styles.hero}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay} />

      <Pressable onPress={onBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={22} color={COLORS.textPrimary} />
      </Pressable>

      <Animated.View style={[styles.favWrap, { transform: [{ scale }] }]}>
        <Pressable onPress={pressFav} style={styles.favButton}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={COLORS.primary}
          />
        </Pressable>
      </Animated.View>
    </ImageBackground>
  );
};

export default FoodHeroImage;

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 320,
    backgroundColor: COLORS.surfaceContainerHigh,
    justifyContent: "flex-start",
  },
  imageStyle: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(23,19,13,0.18)",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    marginTop: 16,
    marginLeft: 14,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
  },
  favWrap: {
    position: "absolute",
    right: 18,
    top: 16,
  },
  favButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
  },
});
