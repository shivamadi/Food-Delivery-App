import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

interface Addon {
  id: string;
  label: string;
  price?: number;
}

interface Props {
  addons: Addon[];
  selected?: string[];
  onToggle?: (id: string) => void;
}

const AddonSelector: React.FC<Props> = ({
  addons,
  selected = [],
  onToggle,
}) => {
  return (
    <View style={styles.container}>
      {addons.map((a) => {
        const active = selected.includes(a.id);
        return (
          <Pressable
            key={a.id}
            onPress={() => onToggle?.(a.id)}
            style={({ pressed }) => [
              styles.row,
              active && { backgroundColor: COLORS.surfaceContainerHigh },
              pressed && { opacity: 0.9 },
            ]}
          >
            <Text
              style={[styles.label, active && { color: COLORS.textPrimary }]}
            >
              {a.label}
            </Text>
            <View style={styles.right}>
              <Text style={styles.price}>
                {a.price ? `$${a.price.toFixed(2)}` : ""}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default AddonSelector;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, gap: 8 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 0.4,
    borderColor: COLORS.outlineVariant,
  },
  label: { color: COLORS.textSecondary, fontFamily: "plus-jakarta-sans" },
  right: {},
  price: {
    color: COLORS.textPrimary,
    fontWeight: "700",
    fontFamily: "plus-jakarta-sans",
  },
});
