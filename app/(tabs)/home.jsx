import { ScrollView, StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { isDarkMode } from '../../helpers/common'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../constants/theme'
import { useFonts } from 'expo-font'
import Header from '../../components/Home/Header'
import { hp, wp } from '../../helpers/common';
import PagerView from 'react-native-pager-view'
import ExploreCard from '../../components/Home/ExploreCard'
import { RefreshControl } from 'react-native'
import Nearby from './../../components/Home/Nearby';
import Explore from './../../components/Home/Explore';

const Home = () => {
  const [fontsLoaded] = useFonts({
    'Jomhuria': require('../../assets/fonts/Jomhuria.ttf'),
    'Outfit': require('../../assets/fonts/Outfit.ttf'),
    'Poppins': require('../../assets/fonts/Poppins.ttf'),
  });

  const dark = isDarkMode();
  const theme = useTheme();
  const styles = StyleSheet.create({
    bg: {
      backgroundColor: theme.colors.primaryBg,
      flex: 1,
    },
  })

  return (
    <SafeAreaView style={styles.bg} edges={['top']}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <PagerView style={{ flex: 1 }} initialPage={0} >
        <View key="1" style={{}}>
          <Explore />
        </View>
        <View key="2" >
          <Nearby />
        </View>
      </PagerView>
    </SafeAreaView>
  );
}

export default Home