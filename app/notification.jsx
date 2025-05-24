import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { hp, isDarkMode } from '../helpers/common'
import { useTheme } from '../constants/theme'
import Header from './../components/Notification/Header';
import Requests from '../components/Notification/Requests'
import Notifications from './../components/Notification/Notifications';

const notification = () => {
    const theme = useTheme();
    const dark = isDarkMode();

    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
    })
    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <Header />
            <Notifications />
        </SafeAreaView>
    )
}

export default notification