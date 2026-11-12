import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { styles } from "./styles";

const HeaderSection = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.heroBadge}>
        <View style={styles.heroInner}>
          <Ionicons name="cafe" size={48} color={COLORS.primary} />
        </View>
      </View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Sign in to continue your flavor journey.
      </Text>
    </View>
  );
};

export default HeaderSection;
