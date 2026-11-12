import { Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const SectionHeader = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default SectionHeader;

const styles = StyleSheet.create({
  title: {
    color: COLORS.textPrimary,
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: "700",
    marginBottom: 12,
    marginLeft: 5,
    textTransform: "uppercase",
  },
});
