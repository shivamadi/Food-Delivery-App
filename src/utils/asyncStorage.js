import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, String(value));
    console.log("Value is stored ");
  } catch (error) {
    console.log("Error storing Value", error);
  }
};

export const getItem = async (key) => {
  try {
    // await AsyncStorage.clear();
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Error retrieving Value", error);
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting Value", error);
  }
};
