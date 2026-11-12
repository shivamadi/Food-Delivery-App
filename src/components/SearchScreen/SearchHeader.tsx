import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

interface SearchHeaderProps {
  onFilterPress?: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ onFilterPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>What'll you eat today?</Text>
      </View>
      {onFilterPress && (
        <Pressable
          onPress={onFilterPress}
          style={({ pressed }) => [
            styles.filterButton,
            pressed && styles.filterButtonPressed,
          ]}
        >
          <Ionicons
            name="funnel"
            size={20}
            color={COLORS.textPrimary}
          />
        </Pressable>
      )}
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.textPrimary,
    fontFamily: "noto-serif",
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: "plus-jakarta-sans",
    marginTop: 4,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.surface,
    borderWidth: 0.5,
    borderColor: COLORS.outlineVariant,
    justifyContent: "center",
    alignItems: "center",
  },
  filterButtonPressed: {
    backgroundColor: COLORS.surfaceContainerHigh,
  },
});
