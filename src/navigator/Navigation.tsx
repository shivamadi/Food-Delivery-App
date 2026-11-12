import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/search/SearchScreen";
import OrderScreen from "../screens/orders/OrderScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/settings/SettingsScreen";
import HelpScreen from "../screens/help/HelpScreen";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../screens/onBoarding/OnBoarding";
import DetailScreen from "../screens/detailScreen/DetailScreen";
import { COLORS } from "../constants/colors";
import { useEffect, useState } from "react";
import { getItem } from "../utils/asyncStorage";
import SignInScreen from "../screens/SignInScreen";

const BottomTab = createBottomTabNavigator();
const ProfileDrawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();

const RootStack = createNativeStackNavigator();

type InitialRoute = "SignIn" | "OnBoarding" | "MainApp";

function AppNavigator({
  initialRouteName,
}: {
  initialRouteName: InitialRoute;
}) {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      <RootStack.Screen name="SignIn" component={SignInScreen} />
      <RootStack.Screen name="OnBoarding" component={OnBoarding} />
      <RootStack.Screen name="MainApp" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
}

function StackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function SearchNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search-stack"
        component={SearchScreen}
        options={{
          headerShown: false,
          animation: "ios_from_left",
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <ProfileDrawer.Navigator
      backBehavior="history"
      initialRouteName="Home-Drawer"
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerShown: false,
        headerTintColor: "#D4A373",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
        },
        drawerType: "front",
        drawerStatusBarAnimation: "fade",
        drawerActiveTintColor: "#EFEAE4",
        drawerInactiveTintColor: "#EFEAE4",
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={28}
            color="#D4A373"
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          />
        ),
        drawerStyle: {
          width: 230,

          backgroundColor: COLORS.surfaceDim,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },

        drawerIcon: ({ focused, color, size }) => {
          const icon =
            route.name === "Home-Drawer"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "My-Orders"
                ? focused
                  ? "bag"
                  : "bag-outline"
                : route.name === "Settings"
                  ? focused
                    ? "settings"
                    : "settings-outline"
                  : focused
                    ? "help-circle-sharp"
                    : "help-circle-outline";

          return <Ionicons size={size} color={color} name={icon} />;
        },
      })}
    >
      <ProfileDrawer.Screen
        name="Home-Drawer"
        component={StackNavigator}
        options={{
          title: "Home",
          drawerLabel: "Home",
          drawerItemStyle: {
            display: "flex",
          },
        }}
      />
      <ProfileDrawer.Screen name="My-Orders" component={OrderScreen} />
      <ProfileDrawer.Screen name="Settings" component={SettingsScreen} />
      <ProfileDrawer.Screen
        name="Help Centre "
        component={HelpScreen}
        options={{
          drawerLabel: "Help",
          drawerContentStyle: {
            paddingTop: 30,
          },
          headerStyle: {
            backgroundColor: "#17130D",
          },
          headerTintColor: "#D4A373",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
        }}
      />
    </ProfileDrawer.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        animation: "shift",
        headerStyle: {
          backgroundColor: "#17130d",
        },
        headerTintColor: "#f2be8c",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold",
          letterSpacing: 1,
        },
        tabBarActiveTintColor: "#f2be8c",
        tabBarInactiveTintColor: "#d4c4b7",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
        tabBarItemStyle: {
          // marginTop: 2,
        },
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: "rgba(212, 163, 115, 0.16)",
          borderTopWidth: 1,
          height: 75,
          paddingBottom: 8,
          paddingTop: 6,
        },

        tabBarIcon: ({ focused, color, size }) => {
          const icon =
            route.name === "Home-Tab"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Search"
                ? focused
                  ? "search"
                  : "search-outline"
                : route.name === "Orders"
                  ? focused
                    ? "bag"
                    : "bag-outline"
                  : focused
                    ? "person"
                    : "person-outline";

          return <Ionicons name={icon} color={color} size={size} />;
        },
      })}
    >
      <BottomTab.Screen
        name="Home-Tab"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}

export function NavigationBar() {
  const [initialRoute, setInitialRoute] = useState<InitialRoute | null>(null);

  const resolveInitialRoute = async () => {
    const onboarded = await getItem("onboarded");
    const signedIn = await getItem("signedIn");

    if (signedIn !== "1") {
      setInitialRoute("SignIn");
      return;
    }

    if (onboarded !== "1") {
      setInitialRoute("OnBoarding");
      return;
    }

    setInitialRoute("MainApp");
  };

  useEffect(() => {
    resolveInitialRoute();
  }, []);

  if (!initialRoute) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppNavigator initialRouteName={initialRoute} />
    </NavigationContainer>
  );
}
