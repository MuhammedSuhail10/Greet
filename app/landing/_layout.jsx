import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useRouter } from 'expo-router'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="landing_1" options={{ animation: 'fade', headerShown: false }} />
        </Stack>
    )
}

export default _layout