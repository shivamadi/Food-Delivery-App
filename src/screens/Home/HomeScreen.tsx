import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "../../components/HomeScreen/Header";
import { COLORS } from "../../constants/colors";
import SearchBar from "../../components/HomeScreen/SearchBar";
import HeroSection from "../../components/HomeScreen/HeroSection";
import Categories from "../../components/HomeScreen/Categories";
import PopularNearby from "../../components/HomeScreen/PopularNearby";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <SearchBar />
        <HeroSection />
        <Categories />
        <PopularNearby />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,

    paddingHorizontal: 10,
  },
});
