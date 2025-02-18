import { ScrollView, StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { isDarkMode } from '../../helpers/common'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../constants/theme'
import { useFonts } from 'expo-font'
import Header from '../../components/Home/Header'
import { hp, wp } from '../../helpers/common';
import NearbyCard from '../../components/Home/NearbyCard'
import PagerView from 'react-native-pager-view'
import ExploreCard from '../../components/Home/ExploreCard'
import { RefreshControl } from 'react-native'

const Home = () => {
  const [fontsLoaded] = useFonts({
    'Jomhuria': require('../../assets/fonts/Jomhuria.ttf'),
    'Outfit': require('../../assets/fonts/Outfit.ttf'),
    'Poppins': require('../../assets/fonts/Poppins.ttf'),
  });

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: "Suhail",
      age: 25,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: "Suhail",
      age: 22,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: "Suhail",
      age: 30,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      name: "Suhail",
      age: 40,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      name: "Suhail",
      age: 10,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d99',
      name: "Suhail",
      age: 42,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7sdf',
      name: "Suhail",
      age: 31,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d9vv',
      name: "Suhail",
      age: 33,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7ddf',
      name: "Suhail",
      age: 44,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29dvs9vv',
      name: "Muhammed Suhail",
      age: 62,
    },
  ];

  const data2 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: "Suhail",
      age: 25,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: "Suhail",
      age: 22,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: "Suhail",
      age: 30,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      name: "Suhail",
      age: 40,
    },
  ]

  const dark = isDarkMode();
  const [reload, setReload] = useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    bg: {
      backgroundColor: theme.colors.primaryBg,
      flex: 1,
    },
    cardBg: {
      width: wp(100),
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingBottom: hp(8),
    },
    button: {
      borderRadius: 10,
      padding: hp(2),
      width: wp(50),
      alignSelf: 'center',
      backgroundColor: theme.colors.primary,
      borderWidth: 1,
      marginTop: hp(2),
    },
    buttonLabel: {
      color: theme.colors.text,
      fontSize: 16,
      fontFamily: 'Poppins',
      textAlign: 'center',
    },
  })

  const onRefresh = useCallback(async () => {
    setReload(true);
  });
  return (
    <SafeAreaView style={styles.bg} edges={['top']}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <PagerView style={{ flex: 1 }} initialPage={0} >
        <View key="1" >
          <Header font='Jomhuria' title="Nearby" height={hp(10)} />
          <View style={{...styles.cardBg, paddingBottom: 0}}>
            {data2.map((item) => <NearbyCard item={item} key={item.id} />)}
          </View>
          <Pressable style={[styles.button,]}>
            <Text style={styles.buttonLabel}>Shuffle suggestions</Text>
          </Pressable>
          {/* <FlatList
            refreshControl={
              <RefreshControl
                refreshing={reload}
                onRefresh={onRefresh}
                colors={['#2196F3']}
                tintColor="#2196F3"
              />
            } 
            ListHeaderComponent={<Header font='Jomhuria' title="Nearby" height={hp(10)} />}
            data={data}
            renderItem={({ item }) => <NearbyCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cardBg}
          /> */}
        </View>
        <View key="2" style={{}}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={reload}
                onRefresh={onRefresh}
                colors={['#2196F3']}
                tintColor="#2196F3"
              />
            }
            ListHeaderComponent={<Header font='Jomhuria' title="Explore" height={hp(10)} />}
            data={data}
            renderItem={({ item }) => <ExploreCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cardBg}
          />
        </View>
      </PagerView>
    </SafeAreaView>
  );
}

export default Home