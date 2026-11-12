import React from "react";
import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";

export interface Category {
  id: string;
  title: string;
  image?: any;
  backgroundColor?: string;
}

interface CategoryGridProps {
  categories: Category[];
  onCategoryPress?: (id: string, title: string) => void;
  numColumns?: number;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onCategoryPress,
  numColumns = 2,
}) => {
  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <View style={styles.itemWrapper}>
      <CategoryCard
        id={item.id}
        title={item.title}
        image={item.image}
        backgroundColor={item.backgroundColor}
        onPress={onCategoryPress}
      />
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // paddingBottom: 24,
  },
  row: {
    gap: 20,
    marginBottom: 15,
  },
  itemWrapper: {
    flex: 1,
  },
});
