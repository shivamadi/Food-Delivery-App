import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

interface Option {
  id: string;
  label: string;
}

interface Props {
  options: Option[];
  value?: string;
  onChange?: (id: string) => void;
}

const OptionSelector: React.FC<Props> = ({ options, value, onChange }) => {
  return (
    <View style={styles.container}>
      {options.map((opt) => (
        <Pressable
          key={opt.id}
          onPress={() => onChange?.(opt.id)}
          style={({ pressed }) => [
            styles.option,
            value === opt.id && { backgroundColor: COLORS.primary },
            pressed && { opacity: 0.85 },
          ]}
        >
          <Text
            style={[
              styles.label,
              value === opt.id && { color: COLORS.onPrimary },
            ]}
          >
            {opt.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default OptionSelector;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10, paddingHorizontal: 24 },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: COLORS.surface,
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
  },
  label: {
    color: COLORS.textPrimary,
    fontFamily: "plus-jakarta-sans",
    fontWeight: "600",
  },
});
