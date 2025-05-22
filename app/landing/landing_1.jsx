import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, isDarkMode, wp } from '../../helpers/common';
import { useTheme } from '../../constants/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useFonts } from 'expo-font';
import { Link, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';

const landing_1 = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const [fontsLoaded] = useFonts({
        'Jomhuria': require('../../assets/fonts/Jomhuria.ttf'),
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    });

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
        header: {
            height: hp(10),
            paddingHorizontal: wp(5),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logoText: {
            color: theme.colors.primary,
            fontSize: 32,
            fontFamily: 'Poppins',
            fontWeight: '700',
        },
        content: {
            flex: 1,
            paddingHorizontal: wp(5),
        },
        heroContainer: {
            height: hp(60),
            width: '100%',
            borderRadius: 30,
            overflow: 'hidden',
            marginTop: hp(1),
            marginBottom: hp(3),
            elevation: 15,
            shadowColor: dark ? '#000' : theme.colors.primary,
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.35,
            shadowRadius: 12,
            position: 'relative',
        },
        heroImage: {
            height: '100%',
            width: '100%',
        },
        gradientOverlay: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: hp(30),
            justifyContent: 'flex-end',
            paddingBottom: hp(4),
            paddingHorizontal: wp(5),
        },
        title: {
            fontFamily: 'Poppins',
            fontSize: 28,
            fontWeight: '700',
            color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.3)',
            textShadowOffset: { width: 0, height: 2 },
            textShadowRadius: 4,
        },
        subtitle: {
            fontFamily: 'Outfit',
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: hp(1),
            marginBottom: hp(2),
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 3,
        },
        buttonRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp(5),
            paddingHorizontal: wp(2),
        },
        primaryButton: {
            width: wp(60),
            backgroundColor: theme.colors.primary,
            borderRadius: 30,
            paddingVertical: hp(1.8),
            paddingHorizontal: wp(10),
            alignItems: 'center',
            elevation: 8,
            shadowColor: theme.colors.primary,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        buttonText: {
            fontFamily: 'Poppins',
            fontSize: 18,
            fontWeight: '600',
            color: '#fff',
        },
        buttonContainer: {
            padding: wp(5),
            paddingTop: 0,
        },
        button: {
            borderRadius: 20,
            padding: hp(2),
            width: wp(50),
            alignSelf: 'center',
            backgroundColor: theme.colors.primary,
        },
        buttonLabel: {
            color: "#fff",
            fontSize: 16,
            fontFamily: 'Poppins',
            textAlign: 'center',
        },
        secondaryButton: {
            borderWidth: 1.5,
            borderColor: dark ? 'rgba(255,255,255,0.5)' : theme.colors.textSecondary,
            borderRadius: 30,
            paddingVertical: hp(1.7),
            paddingHorizontal: wp(8),
            alignItems: 'center',
        },
        secondaryButtonText: {
            fontFamily: 'Outfit',
            fontSize: 16,
            fontWeight: '500',
            color: dark ? 'rgba(255,255,255,0.8)' : theme.colors.textSecondary,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <View style={styles.header}>
                <Text style={styles.logoText}>MeetGreet</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.heroContainer}>
                    <Image
                        style={styles.heroImage}
                        source="https://imgs.search.brave.com/mcOdqwcFzAhtP2cbePhQ75If1XH6gRMnTebpabURp88/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzExL2hhcHB5/LWx1ZmZ5LXNtaWxp/bmctam95ZnVsLWV4/cHJlc3Npb24tZGVz/a3RvcC13YWxscGFw/ZXItY292ZXIuanBn"
                        contentFit="fill"
                        transition={500}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                        style={styles.gradientOverlay}
                    >
                        <Text style={styles.title}>Meet New Friends</Text>
                        <Text style={styles.subtitle}>
                            Connect with like-minded people and create memorable experiences together
                        </Text>
                    </LinearGradient>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => router.push("/auth/login")} style={[styles.button]}  >
                        <Text style={styles.buttonLabel}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default landing_1;