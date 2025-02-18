import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, isDarkMode, wp } from '../../helpers/common';
import { useTheme } from '../../constants/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

const landing_1 = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const [fontsLoaded] = useFonts({
        'Jomhuria': require('../../assets/fonts/Jomhuria.ttf'),
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    });
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
        image: {
            height: hp(50),
            borderRadius: 20,
            width: '100%',
            overflow: 'hidden'
        },
        header: { height: hp(25), display: 'flex', alignItems: 'center', justifyContent: 'center', },
        headText: { color: theme.colors.primary, fontSize: 30, fontFamily: 'Poppins', paddingInline: wp(8) },
        text: { color: theme.colors.text, fontSize: 17, fontFamily: 'Poppins', },
        buttonContainer: {
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.primary,
            alignItems: 'center',
            flexDirection: 'row',
            height: hp(6.5),
            paddingInline: wp(30)
        },
        buttonView: {
            height: hp(15),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
    return (
        <SafeAreaView style={styles.bg}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <View style={styles.header}>
                <Text style={styles.headText}>MeetGreet</Text>
            </View>
            <View style={{ paddingInline: 18, height: hp(50) }}>
                <Image
                    style={styles.image}
                    source="https://imgs.search.brave.com/4_k4IO7Ah-XiWfqZrMKVmdTon4ILHShBsVxmnpkK1Nw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdp/eC5yYW5rZXIuY29t/L3VzZXJfbm9kZV9p/bWcvNDI3MC84NTM4/MjY2NS9vcmlnaW5h/bC84NTM4MjY2NS1w/aG90by11MjAxNDU2/MTc5Nz9hdXRvPWZv/cm1hdCZxPTYwJmZp/dD1jcm9wJmZtPXBq/cGcmZHByPTImdz01/MDA"
                    contentFit="cover"
                />
            </View>
            <View style={styles.buttonView}>
                <Link href="auth/login" asChild>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.text}> Explore </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default landing_1