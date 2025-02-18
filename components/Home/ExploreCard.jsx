import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Image, ImageBackground } from 'expo-image';
import { hp, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme';
import { Link, useNavigation } from 'expo-router';
import InfoBasics from '../Info/InfoBasics';
import FAB from './../FAB';
import Icon from '../../assets/icons';

const ExploreCard = ({ item }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        cardBg: {
            margin: 10,
            width: wp(95),
        },
        image: {
            height: hp(65),
            borderRadius: 20,
            width: '100%',
            overflow: 'hidden'
        },
        textContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: hp(5.5),
            margin: 10
        },
        textBg: {
            borderRadius: 100,
            backgroundColor: theme.colors.secondaryBg,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            height: hp(5),
            paddingInline: 25,
            maxWidth: wp(70),
        },
        name: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 30,
        },
        basics: {
            // marginBlock: 10,
            backgroundColor: theme.colors.secondaryBg,
        },
        button: {
            position: 'absolute',
            bottom: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            zIndex: 3,
            width: wp(35),
            height: 60,
            borderRadius: 30,
            backgroundColor: theme.colors.inverted,
            opacity: 0.9
        },
        button1: {
            left: wp(10),
        },
        button2: {
            left: wp(50),
            backgroundColor: theme.colors.secondaryBg,
        },
        text: {
            fontFamily: 'Poppins',
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.medium,
            marginTop: 7,
        }
    })
    const navigation = useNavigation();
    return (
        <View style={{ ...styles.cardBg }}>
            <View style={styles.textContainer}>
                <View style={styles.textBg}>
                    <Text style={styles.name}>{item.name},</Text>
                    <Text style={styles.name}>{item.age}</Text>
                </View>
                <Pressable onPress={() => navigation.navigate('user_details', { item: item })}>
                    <Icon name="dots" size="28" fill={theme.colors.secondaryBg} strokeWidth="1" />
                </Pressable>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('user_details', { item: item })}>
                <Image
                    style={styles.image}
                    source="https://imgs.search.brave.com/y7FJ6RcZwImUgBuWCg8BO8-jZ5FMLV_NR2dN30NYsig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAxL2x1ZmZ5/LW9wdGltaXN0aWMt/bWF0Y2hpbmctd2Fs/bHBhcGVyLTItcHJl/dmlldy5qcGc"
                    contentFit="cover"
                />
            </TouchableOpacity>
            <View style={{ ...styles.button1, ...styles.button }}>
                <Icon name="chat" size="28" fill={theme.colors.primary} strokeWidth="1" />
            </View>
            <View style={{ ...styles.button2, ...styles.button }}>
                <Icon name="heart_fill" size="28" fill={theme.colors.text} strokeWidth="1" />
            </View>
        </View >
    )
}

export default ExploreCard