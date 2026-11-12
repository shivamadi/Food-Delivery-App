import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, marginTop: 20, marginBottom: 8 },
  title: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: "noto-serif",
    fontWeight: "600",
  },
});
