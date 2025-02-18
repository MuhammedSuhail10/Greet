import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from '../../constants/theme'
import { hp, isDarkMode } from '../../helpers/common'
import Header from './../../components/Chat/Header';
import ChatRooms from '../../components/Chat/ChatRooms'
import { FlatList } from 'react-native'

const chat = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
    })

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
    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            {/* <ScrollView>
                <Header /> */}
                <View style={{ flex: 1, marginBottom: hp(8), }}>
                    <FlatList
                        ListHeaderComponent={<Header />}
                        data={data}
                        renderItem={({ item }) => <ChatRooms item={item} />}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.cardBg}
                    />
                </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default chat