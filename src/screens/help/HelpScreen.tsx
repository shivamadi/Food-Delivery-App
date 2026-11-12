import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import CategoryCard from "../../components/HelpScreen/CategoryCard";
import { COLORS } from "../../constants/colors";
import TrendingTopics from "../../components/HelpScreen/TrendingTopics";
import { useNavigation } from "@react-navigation/native";

const HelpScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView>
        <Pressable
          style={{ marginLeft: 15 }}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={28} color={COLORS.primary} />
        </Pressable>
        <Text style={styles.text}>How can we help ?</Text>
        <Text style={styles.subHeading}>
          Our team of baristas and support specialists {"\n"} are here to ensure
          your experience is smooth {"\n"} and warm.
        </Text>
        <View style={styles.search}>
          <Ionicons
            name="search"
            color={COLORS.textPrimary}
            size={20}
            style={{
              marginLeft: 15,
            }}
          />
          <TextInput
            style={{
              width: "90%",
              height: "100%",
              // borderWidth: 1,
              fontSize: 15,
              padding: 15,
              color: COLORS.textSecondary,
            }}
            placeholderTextColor={COLORS.textSecondary}
            placeholder="Search FAQs, orders..."
          />
        </View>
        <Text style={styles.heading}>Categories</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginRight: 10,
          }}
        >
          <CategoryCard icon="cafe-outline" title="Active Orders" />
          <CategoryCard icon="receipt-outline" title="Past Orders" />
          <CategoryCard icon="wallet-outline" title={"Payment &\nRefunds"} />
          <CategoryCard icon="shield-outline" title={"Account &\nSecurtiy"} />
        </View>
        <Text style={styles.heading}>Trending Topics</Text>
        <View style={styles.trending}>
          <TrendingTopics title="Where is my coffee?" />
          <TrendingTopics title="How to add a tip?" />
          <TrendingTopics title="Cancelling an order?" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,

    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.secondary,
    fontSize: 45,
    fontWeight: "bold",

    textAlign: "center",
    marginTop: 10,
  },
  subHeading: {
    color: COLORS.secondary,
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
  search: {
    flexDirection: "row",
    // padding: 15,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
    borderColor: COLORS.surfaceBright,
    borderWidth: 0.2,
    backgroundColor: COLORS.surfaceContainerLow,
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: {
    color: COLORS.secondary,
    fontSize: 27,
    fontWeight: "600",
    marginLeft: 10,
    marginTop: 25,
  },
  trending: {
    marginTop: 10,
  },
});
