import { View, Text, FlatList, Pressable, RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import Header from './Header'
import { useTheme } from '../../constants/theme'
import { StyleSheet } from 'react-native'
import { hp, wp } from '../../helpers/common'
import ExploreCard from './ExploreCard'
import Footer from './Footer'

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
            id: '1',
            name: "Muhammed",
            age: 25,
        },
    ];
    const onRefresh = useCallback(async () => {
        setReload(true);
    });
    return (
        <FlatList
            // refreshControl={
            //     <RefreshControl
            //         refreshing={reload}
            //         onRefresh={onRefresh}
            //         colors={['#2196F3']}
            //         tintColor="#2196F3"
            //     />
            // }
            ListHeaderComponent={<Header font='Jomhuria' title="Meet And Greet" height={hp(10)} />}
            ListFooterComponent={<Footer />}
            data={data}
            renderItem={({ item }) => <ExploreCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cardBg}
            ListEmptyComponent={() => (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: hp(80), width: wp(100) }}>
                    <Text style={{ fontSize: 16, color: theme.colors.text }}>No data available</Text>
                </View>
            )}
        />
    )
}

export default Explore