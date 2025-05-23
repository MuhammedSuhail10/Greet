import { View, Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>
    )
}

export default Loader