# Food Delivery App

A React Native (Expo) food delivery app demo built during the MobileAppDev Cohort 2026. Features a bottom tab navigator, a drawer inside the Home tab, an onboarding flow, and several screens for search, orders, profile, settings and help.

## Demo Video

https://github.com/user-attachments/assets/4bc8ebe5-c463-40ce-aa6e-120886d40861



## Key Features

- Expo-managed React Native app (SDK 55)
- Bottom tab navigation with `@react-navigation/bottom-tabs`
- Drawer navigator nested in the Home tab with `@react-navigation/drawer`
- Native stack for Home-related screens with `@react-navigation/native-stack`
- Onboarding flow using `react-native-onboarding-swiper`
- Uses `@expo/vector-icons` and other standard Expo libraries

## Project structure (important files)

- `App.tsx` — application entry
- `src/navigator/Navigation.tsx` — main navigator (tabs → drawer → stack)
- `src/screens/` — app screens (Home, Search, Orders, Profile, Settings, Help, OnBoarding)
- `src/components/` — reusable UI components

## Requirements

- Node.js (LTS recommended)
- Expo CLI (or use `npx expo`) — tested with Expo SDK 55
- Android or iOS simulator / physical device (Expo Go)

## Install

1. Clone the repo

   git clone <repo-url>
   cd Food-Delivery-App

2. Install dependencies

   bun install

or with `yarn` if preferred:

yarn

## Run (development)

Start the Expo dev server:

bun start

Then open the app on a simulator or device:

- Android: `bun run android`
- iOS: `bun run ios` (macOS only)
- Web: `bun run web`

## Onboarding & Sign In flow

This project now includes an explicit Sign In flow that runs before onboarding. The root navigator chooses the initial screen based on two persisted flags in `AsyncStorage`:

- `signedIn` — set to `"1"` after a successful sign in
- `onboarded` — set to `"1"` after completing onboarding

Initial routing logic (high level):

- If `signedIn` is not set → show `SignIn` (`src/screens/SignInScreen.tsx`)
- If `signedIn` is set but `onboarded` is not → show `OnBoarding` (`src/screens/onBoarding/OnBoarding.tsx`)
- If both flags are set → show the main app (`NavigationBar` / tabs)

Files involved:

- `src/screens/SignInScreen.tsx` — new Sign In screen and components (`src/components/signin/*`)
- `src/screens/onBoarding/OnBoarding.tsx` — onboarding screens (sets `onboarded` on completion)
- `src/navigator/Navigation.tsx` — root navigator selects the initial route from `AsyncStorage`
- `src/utils/asyncStorage.js` — small wrapper around `@react-native-async-storage/async-storage`

Notes:

- The Sign In screen persists `signedIn` before navigating to onboarding.
- The onboarding screen persists `onboarded` before navigating to the main app.
- For production flows you may prefer to prevent navigating back to Sign In/OnBoarding after completion (current implementation uses `navigate`/`replace` choices accordingly).

## Notes about navigation and names

Route names are used as identifiers in React Navigation. Avoid reusing the same route name at multiple navigator levels (e.g. `Home`) — use unique route names such as `Home-Tab`, `Home-Drawer`, `Home-Screen` and set visible labels with `title`, `headerTitle` or `drawerLabel`.

If you want the Home drawer to always reset to its initial item when switching tabs, either:

- Use `unmountOnBlur: true` on the `Home` tab so the drawer remounts, or
- Listen to the tab `focus` event and programmatically navigate the nested drawer to its `Home` route.
