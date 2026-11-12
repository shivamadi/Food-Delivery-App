import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

interface SearchBarProps {
  onSearch?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onFocus,
  onBlur,
  placeholder = "Search restaurants, dishes...",
}) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const borderColorAnim = React.useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(borderColorAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(borderColorAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onBlur?.();
  };

  const handleClear = () => {
    setText("");
    onSearch?.("");
  };

  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.outlineVariant, COLORS.primary],
  });

  return (
    <View style={styles.container}>
      <View style={[styles.searchContainer]}>
        <Ionicons
          name="search"
          size={20}
          color={COLORS.textSecondary}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textSecondary}
          onChangeText={(text) => {
            setText(text);
            onSearch?.(text);
          }}
          value={text}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {text.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Ionicons
              name="close-circle"
              size={18}
              color={COLORS.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: COLORS.outlineVariant,
    paddingHorizontal: 14,
    paddingVertical: 12,
    overflow: "hidden",
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: "plus-jakarta-sans",
    fontWeight: "400",
  },
  clearButton: {
    padding: 4,
    marginLeft: 8,
  },
});
