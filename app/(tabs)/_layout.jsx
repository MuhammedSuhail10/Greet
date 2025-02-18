import { Tabs } from 'expo-router';
import Icon from '../../assets/icons';
import { isDarkMode } from '../../helpers/common';
import { useTheme } from '../../constants/theme';
import { useFonts } from 'expo-font';
import { hp } from '../../helpers/common';

export default function TabLayout() {
  const theme = useTheme();  
  const [loaded, error] = useFonts({
    'Outfit': require('../../assets/fonts/Outfit.ttf'),
    'Poppins': require('../../assets/fonts/Poppins.ttf'),
  });
  const iconActiveColor = theme.colors.primary;
  const iconInactiveColor = "#A0A0A0";

  return (
    <Tabs screenOptions={{
      animation: 'fade',
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: theme.colors.primary,
      headerShown: false,
      tabBarStyle: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: hp(8),
        backgroundColor: theme.colors.secondaryBg,
        shadowColor: '#000',
        borderColor: 'rgba(0, 0, 0, 0.05)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      },
    }}>
      <Tabs.Screen
        name="home"
        options={({ route }) => ({
          title: 'Home',
          tabBarLabel: "",
          tabBarIconStyle: { marginTop: 15 },
          tabBarIcon: ({ focused }) => <Icon name="home" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        })}
      />
      <Tabs.Screen
        name="chat"
        options={({ route }) => ({
          title: 'Chat',
          tabBarLabel: "",
          tabBarIconStyle: { marginTop: 15 },
          tabBarIcon: ({ focused }) => <Icon name="chat" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        })}
      />
      <Tabs.Screen
        name="wishlist"
        options={({ route }) => ({
          title: 'Wishlist',
          tabBarLabel: "",
          tabBarIconStyle: { marginTop: 15 },
          tabBarIcon: ({ focused }) => <Icon name="heart_fill" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        })}
      />
      <Tabs.Screen
        name="profile"
        options={({ route }) => ({
          title: 'Profile',
          tabBarLabel: "",
          tabBarIconStyle: { marginTop: 15 },
          tabBarIcon: ({ focused }) => <Icon name="profile" size="28" focused fill={focused ? iconActiveColor : iconInactiveColor} strokeWidth="1" />,
        })}
      />
    </Tabs>
  );
}