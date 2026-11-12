import { ScrollView, StyleSheet, View } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import SectionHeader from "../../components/SectionHeader";
import GlassCard from "../../components/GlassCard";
import SettingsItem from "../../components/SettingItem";
import ToggleItem from "../../components/ToggleItem";
import { COLORS } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ProfileCard />

        <View>
          <SectionHeader title="Account" />

          <GlassCard>
            <SettingsItem
              title="Personal Info"
              icon="person-outline"
              iconColor={COLORS.salmon}
              onPress={() => {}}
            />

            <SettingsItem
              title="Saved Addresses"
              icon="location-outline"
              iconColor={COLORS.mint}
              onPress={() => {}}
            />

            <SettingsItem
              title="Payment Methods"
              icon="card-outline"
              iconColor={COLORS.lavender}
              onPress={() => {}}
            />
          </GlassCard>
        </View>

        <View>
          <SectionHeader title="Notifications" />

          <GlassCard>
            <ToggleItem
              title="Push Notifications"
              subtitle="Real-time alerts"
              value={true}
              onValueChange={() => {}}
            />

            <ToggleItem
              title="Order Updates"
              subtitle="Track your orders"
              value={true}
              onValueChange={() => {}}
            />
          </GlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
    gap: 24,
  },
});
