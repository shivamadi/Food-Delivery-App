import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/colors";

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
  showViewAll?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onViewAll,
  showViewAll = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showViewAll && (
        <TouchableOpacity onPress={onViewAll} activeOpacity={0.7}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.textPrimary,
    fontFamily: "noto-serif",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary,
    fontFamily: "plus-jakarta-sans",
  },
});
