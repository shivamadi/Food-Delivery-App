import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import GlassCard from "./GlassCard";
import { COLORS } from "../constants/colors";

const ProfileCard = () => {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>PRO</Text>
      </View>

      <Image
        source={require("../../assets/Profile.jpeg")}
        style={styles.image}
      />

      <Text style={styles.name}>Alex Rivera</Text>

      <Text style={styles.email}>alex.rivera@obsidiangourmet.com</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editBtn}>
        <Ionicons name="pencil" size={18} color="#000" />
      </TouchableOpacity>
    </GlassCard>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: 18,
    right: 18,
    backgroundColor: COLORS.salmon,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#000",
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginTop: 15,
    borderWidth: 3,
    borderColor: COLORS.salmon,
  },

  name: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: "700",
    marginTop: 18,
  },

  email: {
    color: COLORS.textSecondary,
    marginTop: 5,
  },

  button: {
    width: "100%",
    marginTop: 25,
    backgroundColor: COLORS.salmon,
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "700",
    color: "#000",
    fontSize: 16,
  },

  editBtn: {
    position: "absolute",
    right: 95,
    top: 95,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
  },
});
