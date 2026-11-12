import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SearchHeader,
  SearchBar,
  RecentSearches,
  CategoryGrid,
  TrendingList,
  SectionHeader,
  type Category,
  type TrendingItem,
} from "../../components/SearchScreen";
import { COLORS } from "../../constants/colors";

const CATEGORIES: Category[] = [
  {
    id: "1",
    title: "Breakfast",
    backgroundColor: COLORS.primary,
    image:
      "https://i.pinimg.com/736x/6f/87/6a/6f876a8cf33a6c73245905ed5b0398e1.jpg",
  },
  {
    id: "2",
    title: "Coffee",
    backgroundColor: COLORS.secondary,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Bakery",
    backgroundColor: COLORS.tertiaryContainer,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Healthy Eats",
    backgroundColor: COLORS.primaryContainer,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
  },
];

const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "1",
    title: "Smoked Salmon Bagel",
    description: "Fresh bagel with smoked salmon & cream cheese",
    price: "$12.99",
    rating: 4.8,
    reviewCount: 234,
    image:
      "https://i.pinimg.com/736x/36/05/73/360573cc7f67b8409e5b407a0af91023.jpg",
  },
  {
    id: "2",
    title: "Artisan Flat White",
    description: "Smooth espresso with velvety microfoam",
    price: "$5.49",
    rating: 4.9,
    reviewCount: 567,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "The Signature Toast",
    description: "Sourdough with avocado, egg & microgreens",
    price: "$9.99",
    rating: 4.7,
    reviewCount: 189,
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Pistachio Cannoli",
    description: "Italian pastry with pistachio cream filling",
    price: "$6.99",
    rating: 4.9,
    reviewCount: 312,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
  },
];

import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const handleCategoryPress = (id: string, title: string) => {
    Alert.alert(`${title}`, `Viewing ${title} items`);
  };

  const handleTrendingPress = (id: string) => {
    const item = TRENDING_ITEMS.find((i) => i.id === id);
    if (item) {
      (navigation as any).navigate("Details", {
        image: item.image,
        title: item.title,
        price: item.price,
        description: item.description,
        rating: item.rating,
        reviews: item.reviewCount,
      });
    }
  };

  const handleSearchSelect = (query: string) => {
    setSearchQuery(query);
    Alert.alert("Search", `Searching for: ${query}`);
  };

  const handleFilterPress = () => {
    Alert.alert("Filters", "Filter options coming soon");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SearchHeader onFilterPress={handleFilterPress} />

        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Search restaurants, dishes..."
        />

        <RecentSearches onSearchSelect={handleSearchSelect} />

        <SectionHeader
          title="Browse Categories"
          onViewAll={() => Alert.alert("Categories", "View all categories")}
          showViewAll={true}
        />

        <CategoryGrid
          categories={CATEGORIES}
          onCategoryPress={handleCategoryPress}
          numColumns={2}
        />

        <SectionHeader title="Trending Now" />

        <TrendingList
          items={TRENDING_ITEMS}
          onItemPress={handleTrendingPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
