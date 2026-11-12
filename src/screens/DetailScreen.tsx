import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

const DetailScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>DetailScreen</Text>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
