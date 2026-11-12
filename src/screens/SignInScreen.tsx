import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSection from "../components/signin/HeaderSection";
import SignInForm from "../components/signin/SignInForm";
import SocialButtons from "../components/signin/SocialButtons";
import { styles } from "../components/signin/styles";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Soft premium background glow */}
      <View style={styles.backgroundContainer}>
        <View style={styles.glowTop} />
        <View style={styles.glowCenter} />
        <View style={styles.glowBottom} />
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <HeaderSection />
            <SignInForm />

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
              <View style={styles.dividerLine} />
            </View>

            <SocialButtons />

            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Don't have an account? </Text>
              <Pressable onPress={() => {}}>
                <Text style={styles.bottomAction}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
