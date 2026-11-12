import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { styles } from "./styles";

const SocialButtons = () => {
  return (
    <View>
      <Pressable style={styles.socialButton} onPress={() => {}}>
        <Ionicons
          name="logo-google"
          size={18}
          color={COLORS.textPrimary}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </Pressable>
      <Pressable style={styles.socialButton} onPress={() => {}}>
        <Ionicons
          name="logo-apple"
          size={18}
          color={COLORS.textPrimary}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </Pressable>
    </View>
  );
};

export default SocialButtons;
