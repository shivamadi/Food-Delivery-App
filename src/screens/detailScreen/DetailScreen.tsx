import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodHeroImage from "../../components/FoodDetailScreen/FoodHeroImage";
import FoodInfo from "../../components/FoodDetailScreen/FoodInfo";
import SectionTitle from "../../components/FoodDetailScreen/SectionTitle";
import OptionSelector from "../../components/FoodDetailScreen/OptionSelector";
import AddonSelector from "../../components/FoodDetailScreen/AddonSelector";
import SpecialInstructions from "../../components/FoodDetailScreen/SpecialInstructions";
import BottomCartBar from "../../components/FoodDetailScreen/BottomCartBar";
import { useRoute, useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants/colors";

type RouteParams = {
  params?: {
    image?: string;
    title?: string;
    price?: string;
    description?: string;
    rating?: number;
    reviews?: number;
  };
};

const DetailScreen = ({ route }: any) => {
  const nav = useNavigation<any>();
  const item = route.params;

  const [choice, setChoice] = useState("plain");
  const [addons, setAddons] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const addonData = [
    { id: "a1", label: "Extra Cream Cheese", price: 1.5 },
    { id: "a2", label: "Avocado", price: 2.0 },
    { id: "a3", label: "Capers", price: 0.75 },
  ];

  const options = [
    { id: "plain", label: "Plain" },
    { id: "sesame", label: "Sesame" },
    { id: "everything", label: "Everything" },
  ];

  const toggleAddon = (id: string) => {
    setAddons((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const computeTotal = () => {
    const base = parseFloat((item.price || "0").replace("$", "")) || 0;
    const addonsTotal = addons.reduce((sum, id) => {
      const a = addonData.find((x) => x.id === id);
      return sum + (a?.price || 0);
    }, 0);
    return (base + addonsTotal) * quantity;
  };

  const handleAdd = () => {
    Alert.alert("Added", `${item.title} x${quantity} added to cart`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <FoodHeroImage
          image={item.image}
          onBack={() => nav.navigate("Search-stack")}
          onFavorite={() => Alert.alert("Favorite", "Toggled favorite")}
        />

        <FoodInfo
          title={item.title || "Item"}
          price={item.price || "$0.00"}
          rating={item.rating}
          reviews={item.reviews}
          description={item.description}
        />

        <SectionTitle title="Choose" />
        <OptionSelector options={options} value={choice} onChange={setChoice} />

        <SectionTitle title="Add-ons" />
        <AddonSelector
          addons={addonData}
          selected={addons}
          onToggle={toggleAddon}
        />

        <SectionTitle title="Special Instructions" />
        <SpecialInstructions value={notes} onChange={setNotes} />

        <View style={{ height: 120 }} />
      </ScrollView>

      <BottomCartBar
        quantity={quantity}
        onQuantityChange={setQuantity}
        total={computeTotal()}
        onAdd={handleAdd}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scroll: { flex: 1 },
  content: { paddingBottom: 160 },
});
