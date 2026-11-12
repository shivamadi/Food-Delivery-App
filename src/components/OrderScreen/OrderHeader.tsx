import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OrderHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={styles.heading}>My Orders</Text>
        <Text style={styles.subheading}>Track your recent purchases</Text>
      </View>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="white" />
      </Pressable>
    </View>
  );
};

export default OrderHeader;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.textPrimary,
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 1,
    marginTop: 20,
  },
  subheading: {
    color: COLORS.textPrimary,
    fontSize: 17,
  },
});
