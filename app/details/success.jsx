import { StyleSheet, Text, View, Pressable, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { router } from 'expo-router'
import { isDarkMode, hp, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { Icon } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

const success = () => {
    const [loaded, error] = useFonts({
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    })
    const dark = isDarkMode()
    const theme = useTheme()
    const scaleAnim = useRef(new Animated.Value(0.3)).current
    const opacityAnim = useRef(new Animated.Value(0)).current
    const buttonAnim = useRef(new Animated.Value(0)).current
    const lottieRef = useRef(null)

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                    easing: Easing.elastic(1.2),
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]),
            Animated.timing(buttonAnim, {
                toValue: 1,
                duration: 400,
                delay: 800,
                useNativeDriver: true,
            }),
        ]).start()

        if (lottieRef.current) {
            setTimeout(() => {
                lottieRef.current?.play()
            }, 300)
        }
    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: wp(5),
        },
        animationContainer: {
            width: hp(25),
            height: hp(25),
            justifyContent: 'center',
            alignItems: 'center',
        },
        successCircle: {
            width: hp(15),
            height: hp(15),
            borderRadius: hp(7.5),
            backgroundColor: theme.colors.primary + '15',
            justifyContent: 'center',
            alignItems: 'center',
        },
        checkIcon: {
            color: theme.colors.primary,
        },
        title: {
            fontSize: hp(3.5),
            fontFamily: 'Poppins',
            fontWeight: '700',
            color: theme.colors.text,
            marginBottom: hp(2),
            textAlign: 'center',
        },
        subtitle: {
            fontSize: hp(2),
            fontFamily: 'Outfit',
            color: theme.colors.text,
            opacity: 0.8,
            textAlign: 'center',
            marginBottom: hp(5),
            lineHeight: hp(2.5),
            maxWidth: wp(80),
        },
        highlights: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom: hp(5),
            width: wp(85),
            maxWidth: 500,
        },
        highlight: {
            width: wp(40),
            padding: hp(2),
            backgroundColor: theme.colors.secondaryBg + '95',
            borderRadius: 16,
            alignItems: 'center',
            marginBottom: hp(2),
        },
        highlightIcon: {
            color: theme.colors.primary,
            marginBottom: hp(1),
        },
        highlightTitle: {
            fontSize: hp(1.8),
            fontFamily: 'Outfit',
            fontWeight: '600',
            color: theme.colors.text,
            marginBottom: hp(0.5),
            textAlign: 'center',
        },
        highlightDesc: {
            fontSize: hp(1.5),
            fontFamily: 'Outfit',
            color: theme.colors.text,
            opacity: 0.7,
            textAlign: 'center',
        },
        buttonContainer: {
            width: '100%',
            paddingHorizontal: wp(5),
            paddingBottom: hp(4),
        },
        button: {
            borderRadius: 16,
            overflow: 'hidden',
            shadowColor: theme.colors.primary,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 8,
        },
        buttonContent: {
            paddingVertical: hp(2.2),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: '#fff',
            fontSize: hp(2.2),
            fontFamily: 'Outfit',
            fontWeight: '600',
            marginRight: wp(2),
        },
        confetti: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    })

    const navigateToHome = () => {
        router.replace('/home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Animated.View
                    style={[
                        styles.animationContainer,
                        {
                            transform: [{ scale: scaleAnim }],
                            opacity: opacityAnim
                        }
                    ]}
                >
                    <View style={styles.successCircle}>
                        <Icon
                            source="check-circle"
                            size={hp(10)}
                            color={theme.colors.primary}
                        />
                    </View>
                </Animated.View>
                <Animated.View style={{ opacity: opacityAnim, alignItems: 'center' }}>
                    <Text style={styles.title}>Profile Created!</Text>
                    <Text style={styles.subtitle}>
                        Your profile has been successfully set up and is ready to be discovered. Get started with exploring matches now!
                    </Text>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.highlights,
                        {
                            opacity: opacityAnim, transform: [{
                                translateY: opacityAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0]
                                })
                            }]
                        }
                    ]}
                >
                    <View style={styles.highlight}>
                        <Icon
                            source="account-group"
                            size={hp(3)}
                            color={theme.colors.primary}
                            style={styles.highlightIcon}
                        />
                        <Text style={styles.highlightTitle}>Discover Matches</Text>
                        <Text style={styles.highlightDesc}>Find people who share your interests</Text>
                    </View>

                    <View style={styles.highlight}>
                        <Icon
                            source="message-text"
                            size={hp(3)}
                            color={theme.colors.primary}
                            style={styles.highlightIcon}
                        />
                        <Text style={styles.highlightTitle}>Start Conversations</Text>
                        <Text style={styles.highlightDesc}>Connect with your matches</Text>
                    </View>

                    <View style={styles.highlight}>
                        <Icon
                            source="map-marker"
                            size={hp(3)}
                            color={theme.colors.primary}
                            style={styles.highlightIcon}
                        />
                        <Text style={styles.highlightTitle}>Local Events</Text>
                        <Text style={styles.highlightDesc}>Meet people near you</Text>
                    </View>

                    <View style={styles.highlight}>
                        <Icon
                            source="shield-check"
                            size={hp(3)}
                            color={theme.colors.primary}
                            style={styles.highlightIcon}
                        />
                        <Text style={styles.highlightTitle}>Safe & Secure</Text>
                        <Text style={styles.highlightDesc}>Your privacy is our priority</Text>
                    </View>
                </Animated.View>
            </View>

            <Animated.View
                style={[
                    styles.buttonContainer,
                    {
                        opacity: buttonAnim,
                        transform: [{
                            translateY: buttonAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [50, 0]
                            })
                        }]
                    }
                ]}
            >
                <Pressable
                    style={styles.button}
                    onPress={navigateToHome}
                    android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
                >
                    <LinearGradient
                        colors={[theme.colors.primary, theme.colors.primary + 'DD']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.buttonContent}
                    >
                        <Text style={styles.buttonText}>Start Exploring</Text>
                    </LinearGradient>
                </Pressable>
            </Animated.View>
        </SafeAreaView>
    )
}

export default success;