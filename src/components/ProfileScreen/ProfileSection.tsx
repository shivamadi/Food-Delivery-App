import React from "react";
import { StyleSheet, Text, View } from "react-native";

type ProfileSectionProps = {
  title: string;
  children: React.ReactNode;
};

const ProfileSection = ({ title, children }: ProfileSectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  section: {
    marginBottom: 18,
  },
  title: {
    color: "#ebe1d6",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 12,
  },
  content: {
    gap: 12,
  },
});
