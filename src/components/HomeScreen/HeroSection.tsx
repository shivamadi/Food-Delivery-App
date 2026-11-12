import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { COLORS } from "../../constants/colors";

const App = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/31/5b/85/315b853041d19e364903be5750911bb8.jpg",
      }}
      style={styles.container}
      resizeMode="cover"
      imageStyle={{
        borderRadius: 20,
      }}
    >
      <Text style={styles.text}>Food Delivery</Text>
      <Text style={styles.subtext}>
        Freshly brewed artisanal lattes and{"\n"}hand-rolled pastries
      </Text>
      <Pressable style={styles.pressable}>
        <Text>Order Now</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: 200,
    marginHorizontal: 15,
    padding: 20,
  },

  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtext: {
    color: COLORS.primary,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 25,
  },
  pressable: {
    backgroundColor: COLORS.primaryContainer,
    color: COLORS.surface,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
  },
});
