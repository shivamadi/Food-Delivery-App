import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { COLORS } from "../../constants/colors";
import QuantitySelector from "./QuantitySelector";

interface Props {
  quantity: number;
  onQuantityChange: (v: number) => void;
  total: number;
  onAdd: () => void;
}

const BottomCartBar: React.FC<Props> = ({
  quantity,
  onQuantityChange,
  total,
  onAdd,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <QuantitySelector value={quantity} onChange={onQuantityChange} />
      </View>

      <View style={styles.right}>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
        <Pressable onPress={onAdd} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomCartBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.surfaceContainerHigh,
    borderRadius: 999,
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
    elevation: 4,
  },
  left: {},
  right: { flexDirection: "row", alignItems: "center", gap: 12 },
  total: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    marginRight: 6,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },
  buttonText: { color: COLORS.onPrimary, fontWeight: "700" },
});
