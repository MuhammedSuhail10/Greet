import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useRouter } from 'expo-router'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="personal" options={{ animation: 'fade', headerShown: false }} />
            <Stack.Screen name="profile_image" options={{ animation: 'fade', headerShown: false }} />
            {/* <Stack.Screen name="preference" options={{ animation: 'fade', headerShown: false }} /> */}
            <Stack.Screen name="success" options={{ animation: 'fade', headerShown: false }} />
        </Stack>
    )
} 

export default _layout