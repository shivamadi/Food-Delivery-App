import React from "react";
import { StyleSheet, FlatList, ListRenderItem } from "react-native";
import TrendingCard from "./TrendingCard";

export interface TrendingItem {
  id: string;
  title: string;
  description?: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: any;
}

interface TrendingListProps {
  items: TrendingItem[];
  onItemPress?: (id: string) => void;
}

const TrendingList: React.FC<TrendingListProps> = ({ items, onItemPress }) => {
  const renderItem: ListRenderItem<TrendingItem> = ({ item }) => (
    <TrendingCard
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      rating={item.rating}
      reviewCount={item.reviewCount}
      image={item.image}
      onPress={onItemPress}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default TrendingList;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});
