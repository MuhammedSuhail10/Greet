import { Dimensions, useColorScheme } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const isDarkMode = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark';
};

export const hp = percentage => {
  return (percentage * deviceHeight) / 100;
};

export const wp = percentage => {
  return (percentage * deviceWidth) / 100;
};