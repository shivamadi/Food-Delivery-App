import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ProfileHeaderProps = {
  name: string;
  email: string;
  memberBadge: string;
  initials: string;
};

const ProfileHeader = ({
  name,
  email,
  memberBadge,
  initials,
}: ProfileHeaderProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <Pressable style={styles.editChip}>
          <Ionicons name="create-outline" size={16} color="#d4a373" />
          <Text style={styles.editChipText}>Edit</Text>
        </Pressable>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.badge}>
        <Ionicons name="sparkles-outline" size={15} color="#f2be8c" />
        <Text style={styles.badgeText}>{memberBadge}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 20,
    backgroundColor: "rgba(31, 27, 20, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(212, 163, 115, 0.16)",
    marginBottom: 16,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  avatar: {
    width: 74,
    height: 74,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(212, 163, 115, 0.18)",
    borderWidth: 1,
    borderColor: "rgba(240, 189, 139, 0.28)",
  },
  avatarText: {
    color: "#ebe1d6",
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  editChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: "rgba(52, 45, 39, 0.85)",
    borderWidth: 1,
    borderColor: "rgba(212, 163, 115, 0.18)",
  },
  editChipText: {
    color: "#f2be8c",
    fontSize: 13,
    fontWeight: "600",
  },
  name: {
    color: "#ebe1d6",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
    marginBottom: 6,
  },
  email: {
    color: "#d4c4b7",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 8,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "rgba(242, 190, 140, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(242, 190, 140, 0.16)",
  },
  badgeText: {
    color: "#dcc2a9",
    fontSize: 13,
    fontWeight: "600",
  },
});
