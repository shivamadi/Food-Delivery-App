import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

interface Props {
  value: number;
  onChange: (v: number) => void;
}

const QuantitySelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onChange(Math.max(1, value - 1))}
        style={styles.btn}
      >
        <Text style={styles.btnText}>-</Text>
      </Pressable>
      <Text style={styles.value}>{value}</Text>
      <Pressable onPress={() => onChange(value + 1)} style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", gap: 12 },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
  },
  btnText: { color: COLORS.textPrimary, fontSize: 18, fontWeight: "700" },
  value: { color: COLORS.textPrimary, fontSize: 16, fontWeight: "700" },
});
