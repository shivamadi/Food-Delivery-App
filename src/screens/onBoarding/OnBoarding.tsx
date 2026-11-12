import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

const OnBoarding = () => {
  const navigation = useNavigation<any>();
  const handleDone = () => {
    setItem("onboarded", "1");
    navigation.replace("MainApp");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity
        style={{
          marginRight: 20,
        }}
        {...props}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: "#f3d4c4",
            image: (
              <View>
                <LottieView
                  source={require("../../../assets/animation/Cooking.json")}
                  autoPlay
                  loop
                  resizeMode="contain"
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Discover Great Food",
            subtitle:
              "Browse fresh meals and coffee delivered fast to your door",
          },
          {
            backgroundColor: "#d6faea",
            image: (
              <View>
                <LottieView
                  source={require("../../../assets/animation/Food Courier.json")}
                  autoPlay
                  loop
                  resizeMode="contain"
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Track Your Order",
            subtitle:
              "See your delivery progress in real time from kitchen to home",
          },
          {
            backgroundColor: "#f8e8bb",
            image: (
              <View>
                <LottieView
                  source={require("../../../assets/animation/Food animation.json")}
                  autoPlay
                  loop
                  resizeMode="contain"
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Enjoy Every Bite",
            subtitle:
              "Order your favorites anytime and get them when you need them",
          },
        ]}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
