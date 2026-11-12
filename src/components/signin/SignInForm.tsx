import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../../utils/asyncStorage";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <View style={styles.formContainer}>
      {/* Email input */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <View style={styles.inputRow}>
          <Ionicons
            name="mail-outline"
            size={20}
            color={COLORS.textSecondary}
            style={styles.inputIcon}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            placeholder="you@example.com"
            placeholderTextColor={COLORS.onSurfaceVariant}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Password input */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputRow}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={COLORS.textSecondary}
            style={styles.inputIcon}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={COLORS.onSurfaceVariant}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <Pressable
            style={styles.inputAction}
            onPress={() => setIsPasswordVisible((prev) => !prev)}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={COLORS.textSecondary}
            />
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.forgotRow} onPress={() => {}}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={async () => {
          await setItem("signedIn", "1");
          navigation.replace("OnBoarding");
        }}
      >
        <Text style={styles.primaryButtonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
