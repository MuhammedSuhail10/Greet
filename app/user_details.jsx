import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { hp, isDarkMode } from '../helpers/common'
import { useTheme } from '../constants/theme'
import { Link, router, useLocalSearchParams } from 'expo-router'
import Icon from '../assets/icons'
import { ImageBackground } from 'expo-image'
import InfoHeader from './../components/Info/InfoHeader';
import InfoActions from './../components/Info/InfoActions';
import FAB from './../components/FAB';
import InfoBasics from '../components/Info/InfoBasics'
import InfoBio from '../components/Info/InfoBio'

const user_details = () => {
  const theme = useTheme();
  const dark = isDarkMode();
  const { item } = useLocalSearchParams();

  const styles = StyleSheet.create({
    bg: {
      backgroundColor: theme.colors.primaryBg,
      flex: 1,
    },
  })

  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <FAB text="Subscribe" bottom={10} />
      <ScrollView>
        <InfoHeader />
        <InfoActions />
        <InfoBasics />
        <InfoBio />
      </ScrollView>
    </SafeAreaView>
  )
}

export default user_details