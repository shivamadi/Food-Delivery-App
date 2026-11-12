import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

type OrderCardProps = {
  title?: string;
  items?: string[];
  price?: string;
  eta?: string;
  status?: string;
  image?: ImageSourcePropType;
  orderId?: string;
  onTrackPress?: () => void;
  onDetailsPress?: () => void;
};

const defaultImage = {
  uri: "https://i.pinimg.com/736x/98/d0/3b/98d03bd7c2a93f2e4f9972efa9da61be.jpg",
};

const OrderCard = ({
  title = "Velvet Brew Roastery",
  items = ["1x Oat Milk Latte", "1x Butter Croissant"],
  price = "$14.50",
  eta = "12:45 PM (12 mins)",
  status = "IN TRANSIT",
  image = defaultImage,
  orderId = "Order ID #FD-2841",
  onTrackPress,
  onDetailsPress,
}: OrderCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image source={image} style={styles.image} />

        <View style={styles.orderInfo}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          <View style={styles.itemsBlock}>
            {items.map((item) => (
              <Text key={item} style={styles.itemText} numberOfLines={1}>
                {item}
              </Text>
            ))}
          </View>

          <Text style={styles.orderId} numberOfLines={1}>
            {orderId}
          </Text>
        </View>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText} numberOfLines={1}>
            {status}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.summaryRow}>
        <View style={styles.summaryColumn}>
          <Text style={styles.summaryLabel}>Estimated Arrival</Text>
          <View style={styles.etaRow}>
            <Ionicons
              name="time-outline"
              size={16}
              color={COLORS.textSecondary}
            />
            <Text style={styles.etaText}>{eta}</Text>
          </View>
        </View>

        <View style={[styles.summaryColumn, styles.summaryRight]}>
          <Text style={styles.summaryLabel}>Total Price</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <Pressable
          onPress={onTrackPress}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Track Order</Text>
        </Pressable>

        <Pressable
          onPress={onDetailsPress}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "stretch",
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
    shadowColor: COLORS.background,
    shadowOpacity: 0.22,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 20,
    marginRight: 14,
    backgroundColor: COLORS.surfaceContainerHigh,
  },
  orderInfo: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 0.2,
  },
  itemsBlock: {
    marginTop: 6,
    gap: 3,
  },
  itemText: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
  },
  orderId: {
    color: COLORS.onSurfaceVariant,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
  },
  statusBadge: {
    marginLeft: 12,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: COLORS.surfaceContainerHighest,
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
  },
  statusText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.6,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.outlineVariant,
    marginVertical: 16,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  summaryColumn: {
    flex: 1,
    minWidth: 0,
  },
  summaryRight: {
    alignItems: "flex-end",
  },
  summaryLabel: {
    color: COLORS.onSurfaceVariant,
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
  },
  etaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  etaText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: "700",
  },
  priceText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "900",
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  primaryButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: COLORS.onPrimary,
    fontSize: 14,
    fontWeight: "800",
  },
  secondaryButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.outline,
    paddingHorizontal: 16,
  },
  secondaryButtonText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: "800",
  },
  buttonPressed: {
    opacity: 0.88,
  },
});
