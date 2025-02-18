import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from '../../constants/theme'
import { isDarkMode } from '../../helpers/common'
import Header from './../../components/Profile/Header';
import Overview from '../../components/Profile/Overview'

const profile = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
    })
    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <ScrollView>
                <Header />
                <Overview />
            </ScrollView>
        </SafeAreaView>
    )
}

export default profile