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
            ListHeaderComponent={<Header font='Jomhuria' title="Meet And Greet" height={hp(10)} />}
            data={data}
            renderItem={({ item }) => <ExploreCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cardBg}
        />
    )
}

export default Explore