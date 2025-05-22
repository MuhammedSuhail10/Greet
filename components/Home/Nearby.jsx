import { View, Text, FlatList, Pressable, Platform, Alert, Linking } from 'react-native'
import * as IntentLauncher from 'expo-intent-launcher';
import * as Application from 'expo-application';
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
    const [locationError, setLocationError] = useState(false);

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
            backgroundColor: theme.colors.primary,
            marginTop: hp(2),
        },
        buttonLabel: {
            color: "#fff",
            fontSize: 16,
            fontFamily: 'Poppins',
            textAlign: 'center',
        },
        errorMsg: { color: theme.colors.text, textAlign: 'center', fontSize: 20, fontFamily: 'Outfit' }
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
        {
            id: '58694a0f-3da1-471f-bdd96-145571e29d72',
            name: "Suhail",
            age: 30,
        },
        {
            id: '58694a0f-3da1-471f-bfd96-145571e29d78',
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
            setErrorMsg("To see who's nearby, turn on location services. Enable location access to start exploring connections around you!");
            setLocationError(true); setLoading(false);
            return;
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('You’ve denied location access, which is required to find nearby people. Please update your settings to allow location permissions.')
            setLoading(false);
            if (Platform.OS === 'ios') {
                Alert.alert(
                    "Location Permission Required",
                    "You’ve denied location access, which is required to find nearby people. Please update your settings to allow location permissions.",
                    [
                        { text: "Cancel", style: "cancel" },
                        { text: "Open Settings", onPress: () => Linking.openSettings() }
                    ]
                );
            }
            else if (Platform.OS === 'android') {
                Alert.alert(
                    "Location Permission Required",
                    "You’ve denied location access, which is required to find nearby people. Please update your settings to allow location permissions.",
                    [
                        { text: "Cancel", style: "cancel" },
                        {
                            text: "Open Settings", onPress: () => IntentLauncher.startActivityAsync(
                                IntentLauncher.ActivityAction.APPLICATION_DETAILS_SETTINGS,
                                { data: 'package:' + Application.applicationId }
                            )
                        }
                    ]
                );
            }
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
        setLoading(false);
    }

    const openLocationSettings = async () => {
        if (locationError) {
            if (Platform.OS === 'android') {
                await IntentLauncher.startActivityAsync('android.settings.LOCATION_SOURCE_SETTINGS');
            } else {
                const supported = await Linking.canOpenURL('app-settings:');
                if (supported) {
                    Linking.openURL('app-settings:');
                } else {
                    Alert.alert(
                        'Settings',
                        'Please go to Settings > Privacy & Security > Location Services to enable location access.',
                        [{ text: 'OK' }]
                    );
                }
            }
        } getData();
    };
    return (
        <>
            {loading ? <Loader /> : (
                <>
                    {location ? (
                        <FlatList
                            ListHeaderComponent={<Header font='Jomhuria' title="Nearby" height={hp(10)} />}
                            data={data2}
                            renderItem={({ item }) => <NearbyCard item={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.cardBg}
                            ListFooterComponent={
                                <View style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', width: wp(100), marginBottom: 10 }}>
                                    <Pressable onPress={() => getData()} style={styles.button}>
                                        <Text style={styles.buttonLabel}>Shuffle suggestions</Text>
                                    </Pressable>
                                </View>
                            }
                            ListEmptyComponent={
                                <View>
                                    <Text style={{ textAlign: 'center', marginTop: 20 }}>No nearby people found</Text>
                                </View>
                            }
                        />
                    ) : (
                        <>
                            <Header font='Jomhuria' title="Nearby" height={hp(10)} />
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: hp(80), paddingInline: 20 }}>
                                <Text style={styles.errorMsg}>{errorMsg}</Text>
                                <Pressable onPress={openLocationSettings} style={[styles.button, { marginTop: 15 }]} >
                                    <Text style={styles.buttonLabel}>
                                        {locationError ? 'Open Location' : 'Try Again'}
                                    </Text>
                                </Pressable>
                            </View>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Nearby;