import { View, Text, FlatList, Pressable, RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import Header from './Header'
import { useTheme } from '../../constants/theme'
import { StyleSheet } from 'react-native'
import { hp, wp } from '../../helpers/common'
import ExploreCard from './ExploreCard'

const Explore = () => {
    const theme = useTheme();
    const [reload, setReload] = useState(false);
    const styles = StyleSheet.create({
        cardBg: {
            width: wp(100),
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: hp(8),
        },
    })
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: "Muhammed Suhail Muha",
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
    const onRefresh = useCallback(async () => {
        setReload(true);
    });
    return (
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
    )
}

export default Explore