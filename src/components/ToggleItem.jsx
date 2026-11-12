import { View, Text, Switch, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const ToggleItem = ({ title, subtitle, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#2D2D31",
          true: COLORS.salmon,
        }}
        thumbColor="#fff"
      />
    </View>
  );
};

export default ToggleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },

  subtitle: {
    color: COLORS.textSecondary,
    marginTop: 4,
    fontSize: 12,
  },
});
