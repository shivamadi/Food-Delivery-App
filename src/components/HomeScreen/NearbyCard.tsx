import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Card = {
  icon: string;
  time: string;
  tag: string;
  title: string;
};

const NearbyCard = ({ icon, time, tag, title }: Card) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => navigation.navigate("Search")}
      style={styles.container}
    >
      <ImageBackground
        source={{
          uri: icon,
        }}
        style={styles.image}
        imageStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      ></ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <Text style={styles.text}>{title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              justifyContent: "flex-start",
            }}
          >
            <Ionicons
              name="time-outline"
              color={COLORS.primaryContainer}
              size={20}
            />
            <Text
              style={{ marginLeft: 8, fontSize: 16, color: COLORS.primary }}
            >
              {time}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: COLORS.onSurfaceVariant,
            backgroundColor: COLORS.surface,
            padding: 5,
            height: 22,
            paddingHorizontal: 10,
            letterSpacing: 0.5,
            borderRadius: 15,
            fontWeight: "900",
            fontSize: 11,
          }}
        >
          {tag}
        </Text>
      </View>
    </Pressable>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surfaceDim,
    borderWidth: 0.3,
    borderColor: COLORS.outlineVariant,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 20,
  },
  image: {
    height: 200,

    width: "100%",
  },
  text: {
    fontSize: 21,
    color: COLORS.onSurfaceVariant,
    fontWeight: "700",
    marginBottom: 8,
  },
});
