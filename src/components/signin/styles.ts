import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");
const HERO_SIZE = Math.min(width * 0.42, 180);
const MAX_CONTENT_WIDTH = 480;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.background,
    overflow: "hidden",
  },
  glowTop: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: COLORS.primary,
    opacity: 0.14,
    top: -80,
    left: -40,
  },
  glowBottom: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: COLORS.secondary,
    opacity: 0.12,
    bottom: -140,
    right: -60,
  },
  glowCenter: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.tertiary,
    opacity: 0.08,
    top: 180,
    right: -40,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: MAX_CONTENT_WIDTH,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  heroBadge: {
    width: HERO_SIZE,
    height: HERO_SIZE,
    borderRadius: HERO_SIZE / 2,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  heroInner: {
    width: HERO_SIZE * 0.74,
    height: HERO_SIZE * 0.74,
    borderRadius: HERO_SIZE * 0.37,
    backgroundColor: COLORS.surfaceContainerHigh,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
  },
  formContainer: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
  },
  inputGroup: {
    marginBottom: 14,
  },
  inputLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 6,
    letterSpacing: 0.4,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surfaceContainerHigh,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
    paddingHorizontal: 12,
    height: 52,
  },
  inputIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 15,
  },
  inputAction: {
    paddingLeft: 8,
    paddingVertical: 6,
  },
  forgotRow: {
    alignItems: "flex-end",
    marginTop: 2,
  },
  forgotText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  primaryButton: {
    marginTop: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 18,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonText: {
    color: COLORS.onPrimary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.outlineVariant,
  },
  dividerText: {
    marginHorizontal: 10,
    color: COLORS.textSecondary,
    fontSize: 11,
    letterSpacing: 1.4,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
    backgroundColor: COLORS.surfaceContainerHigh,
    borderRadius: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  socialButtonText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
  socialIcon: {
    marginRight: 8,
  },
  bottomRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomText: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  bottomAction: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: "700",
  },
});
