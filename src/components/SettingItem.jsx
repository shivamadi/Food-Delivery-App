import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants/colors";

const SettingsItem = ({ title, icon, iconColor, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <View
          style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}
        >
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
    </TouchableOpacity>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});
