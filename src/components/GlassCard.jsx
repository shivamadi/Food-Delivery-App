import { View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const GlassCard = ({ children }) => {
  return <View style={[styles.card]}>{children}</View>;
};

export default GlassCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: COLORS.outline,
    padding: 20,
  },
});
