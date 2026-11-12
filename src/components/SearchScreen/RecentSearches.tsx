import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

interface RecentSearch {
  id: string;
  label: string;
}

interface RecentSearchesProps {
  onSearchSelect?: (label: string) => void;
  onRemove?: (id: string) => void;
}

const DEFAULT_SEARCHES: RecentSearch[] = [
  { id: "1", label: "Iced Latte" },
  { id: "2", label: "Croissant" },
  { id: "3", label: "Avocado Toast" },
];

const RecentSearches: React.FC<RecentSearchesProps> = ({
  onSearchSelect,
  onRemove,
}) => {
  const [searches, setSearches] = useState<RecentSearch[]>(DEFAULT_SEARCHES);

  const handleRemove = (id: string) => {
    setSearches(searches.filter((item) => item.id !== id));
    onRemove?.(id);
  };

  const renderChip = ({ item }: { item: RecentSearch }) => (
    <Pressable
      onPress={() => onSearchSelect?.(item.label)}
      style={({ pressed }) => [
        styles.chip,
        pressed && styles.chipPressed,
      ]}
    >
      <Text style={styles.chipLabel}>{item.label}</Text>
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation();
          handleRemove(item.id);
        }}
        style={styles.closeButton}
      >
        <Ionicons
          name="close-circle"
          size={16}
          color={COLORS.secondary}
          style={{ opacity: 0.7 }}
        />
      </TouchableOpacity>
    </Pressable>
  );

  if (searches.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Searches</Text>
      <FlatList
        data={searches}
        renderItem={renderChip}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    fontFamily: "plus-jakarta-sans",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  listContent: {
    paddingHorizontal: 20,
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: COLORS.secondaryContainer,
    borderWidth: 0.5,
    borderColor: COLORS.secondary,
    opacity: 0.85,
    gap: 8,
  },
  chipPressed: {
    opacity: 1,
    backgroundColor: COLORS.primary,
  },
  chipLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.textPrimary,
    fontFamily: "plus-jakarta-sans",
  },
  closeButton: {
    padding: 2,
  },
});
