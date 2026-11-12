import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import OrderHeader from "../../components/OrderScreen/OrderHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderStatus from "../../components/OrderScreen/OrderStatus";
import OrderCard from "../../components/OrderScreen/OrderCard";

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
          // borderRadius: 10,
        }}
      >
        <OrderHeader />
        <OrderStatus />

        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,

    paddingHorizontal: 25,
    // paddingTop: 10,
  },
});
