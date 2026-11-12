import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import LogoutButton from "../../components/ProfileScreen/LogoutButton";
import PremiumCard from "../../components/ProfileScreen/PremiumCard";
import ProfileHeader from "../../components/ProfileScreen/ProfileHeader";
import ProfileMenuItem from "../../components/ProfileScreen/ProfileMenuItem";
import ProfileSection from "../../components/ProfileScreen/ProfileSection";
import ProfileStats from "../../components/ProfileScreen/ProfileStats";

const stats = [
  { label: "Orders", value: "48", icon: "bag-outline" as const },
  { label: "Favorites", value: "12", icon: "heart-outline" as const },
  { label: "Reward points", value: "2,450", icon: "sparkles-outline" as const },
  { label: "Wallet", value: "$32.80", icon: "wallet-outline" as const },
];

const menuItems = [
  {
    title: "Edit Profile",
    subtitle: "Update your name, photo, and contact details",
    icon: "create-outline" as const,
  },
  {
    title: "Saved Addresses",
    subtitle: "Manage delivery locations and favorites",
    icon: "location-outline" as const,
  },
  {
    title: "Payment Methods",
    subtitle: "Cards, wallet balance, and billing preferences",
    icon: "card-outline" as const,
  },
  {
    title: "Order History",
    subtitle: "Reorder past meals and track receipts",
    icon: "time-outline" as const,
  },
  {
    title: "Favorites",
    subtitle: "Quick access to your saved restaurants",
    icon: "heart-outline" as const,
  },
  {
    title: "Notifications",
    subtitle: "Delivery updates, offers, and account alerts",
    icon: "notifications-outline" as const,
  },
  {
    title: "Help & Support",
    subtitle: "FAQs, live chat, and customer care",
    icon: "help-circle-outline" as const,
  },
  {
    title: "Settings",
    subtitle: "App preferences, privacy, and display options",
    icon: "settings-outline" as const,
  },
];

const ProfileScreen = () => {
  return (
    <View style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          name="Dhruv Sood"
          email="dhruv@example.com"
          memberBadge="Premium Membership"
          initials="DS"
        />

        <ProfileStats items={stats} />

        <PremiumCard />

        <ProfileSection title="Account">
          <View style={styles.menuGroup}>
            {menuItems.map((item) => (
              <ProfileMenuItem
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            ))}
          </View>
        </ProfileSection>

        <LogoutButton />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#17130d",
  },
  container: {
    flex: 1,
    // backgroundColor: "#17130d",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  menuGroup: {
    gap: 12,
  },
});
