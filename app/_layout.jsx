import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useRouter } from 'expo-router'
import { useTheme } from '../constants/theme';

const _layout = () => {
    const theme = useTheme();
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name="user_details" options={{ presentation: 'transparentModal', animation: 'fade', headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name="landing" options={{ animation: 'fade', headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name="notification" options={{ presentation: 'transparentModal', animation: 'fade', headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name="auth" options={{ animation: 'fade', headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
            <Stack.Screen name="details" options={{ animation: 'fade', headerShown: false, cardStyle: { backgroundColor: theme.colors.primaryBg }, animationEnabled: false, gestureEnabled: false }} />
        </Stack>
    )
}

export default _layout