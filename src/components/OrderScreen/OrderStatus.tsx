import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

const OrderStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ongoing</Text>
      <Text style={styles.text}>Delivered</Text>
      <Text style={styles.text}>Cancelled</Text>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    borderRadius: 10,
  },
  text: {
    backgroundColor: "#644d35",
    padding: 13,
    borderRadius: 7,
    paddingHorizontal: 17,
    color: COLORS.primary,
    fontWeight: "700",
    width: "32%",
    textAlign: "center",
    fontSize: 15,
  },
});
