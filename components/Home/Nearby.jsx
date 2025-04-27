import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import NearbyCard from './NearbyCard'
import { useTheme } from '../../constants/theme'
import { StyleSheet } from 'react-native'
import { hp, wp } from '../../helpers/common'
import * as Location from 'expo-location'
import Loader from '../Loader'

const Nearby = () => {
    const theme = useTheme();
    const page = 1;
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const styles = StyleSheet.create({
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
            // alignSelf: 'center',
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

    useEffect(() => {
        getData();
    }, [])

    const getLocation = async () => {
        setLoading(true);
        const locationServicesEnabled = await Location.hasServicesEnabledAsync();
        if (!locationServicesEnabled) {
            setErrorMsg('Location services are disabled. Please enable them in your device settings.');
            setLoading(false);
            return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied. Change the permission in settings.')
            setLoading(false);
            return;
        }
        let current_loc = await Location.getCurrentPositionAsync({});
        setLocation(current_loc.coords);
        setLoading(false);
    }
    const getData = async () => {
        getLocation();
        if (!location) {
            setErrorMsg('Location not found. Please enable location services.')
            return;
        }
        setLoading(true);

        // api working

        setLoading(false);
    }
    return (
        <>
            {loading ? <Loader /> : <>{location ? < FlatList
                ListHeaderComponent={<Header font='Jomhuria' title="Nearby" height={hp(10)} />}
                data={data2}
                renderItem={({ item }) => <NearbyCard item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.cardBg}
                ListFooterComponent={
                    <View style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', width: wp(100) }}>
                        <Pressable onPress={() => getData()} style={[styles.button,]}>
                            <Text style={styles.buttonLabel}>Shuffle suggestions</Text>
                        </Pressable>
                    </View>
                }
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No nearby people found</Text>}
            /> : (
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20, height: hp(100) }}>
                    <Text style={{ color: theme.colors.text, textAlign: 'center', fontWeight: 'bold', fontSize: 16, fontFamily: 'Poppins' }}>
                        {errorMsg}
                    </Text>
                    <Pressable
                        onPress={() => getData()}
                        style={[styles.button, { marginTop: 15 }]}
                    >
                        <Text style={styles.buttonLabel}>Try Again</Text>
                    </Pressable>
                </View>
            )} </>}
        </>
    )
}

export default Nearby;