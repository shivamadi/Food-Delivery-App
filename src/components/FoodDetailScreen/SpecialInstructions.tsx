import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../constants/colors";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SpecialInstructions: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder="Any special requests?"
      placeholderTextColor={COLORS.textSecondary}
      style={styles.input}
      multiline
    />
  );
};

export default SpecialInstructions;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    padding: 14,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
    fontFamily: "plus-jakarta-sans",
    minHeight: 84,
    marginHorizontal: 24,
    marginTop: 8,
  },
});
