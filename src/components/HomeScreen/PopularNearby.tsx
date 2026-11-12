import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import NearbyCard from "./NearbyCard";

const PopularNearby = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>PopularNearby</Text>
        <Pressable>
          <Text style={styles.button}>View All</Text>
        </Pressable>
      </View>
      <NearbyCard
        icon="https://i.pinimg.com/736x/4c/9c/2d/4c9c2d40171d09708a4c93e6665592f1.jpg"
        tag="PREMIUM"
        title="Velvet Brew Roastery"
        time="15 - 20 min"
      />
      <NearbyCard
        icon="https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg"
        tag="BAKER"
        title="The Golden Grain"
        time="20 - 30 min"
      />
      <NearbyCard
        icon="https://i.pinimg.com/736x/b9/97/f4/b997f495596cf60bfcb91907abb8a783.jpg"
        tag="PREMIUM"
        title="Starbucks"
        time="10 - 20 min"
      />
    </View>
  );
};

export default PopularNearby;

const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 20,
  },
  heading: {
    color: COLORS.secondary,
    fontSize: 24,
    fontWeight: "600",
  },
  button: {
    color: COLORS.primary,
    fontWeight: "500",
  },
});
