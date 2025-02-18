import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { hp, isDarkMode, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme'
import NearbyCard from '../../components/Home/NearbyCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './../../components/Liked/Header';

const wishlist = () => {
    const dark = isDarkMode();
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
        },
    })
    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: hp(8) }}>
                <FlatList
                    ListHeaderComponent={<Header font='Jomhuria' title="Nearby" height={hp(10)} />}
                    data={data}
                    renderItem={({ item }) => <NearbyCard item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.cardBg}
                />
            </View>
        </SafeAreaView>
    )
}

export default wishlist