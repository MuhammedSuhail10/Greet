import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Image, ImageBackground } from 'expo-image';
import { hp, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme';
import { useNavigation } from 'expo-router';
import Icon from '../../assets/icons';

const ExploreCard = ({ item }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        cardBg: {
            margin: 10,
            width: wp(95),
        },
        image: {
            height: hp(52.5),
            borderRadius: 20,
            width: '100%',
            overflow: 'hidden'
        },
        text: {
            fontFamily: 'Poppins',
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.medium,
            marginTop: 7,
        },
        gradientOverlay: {
            opacity: 0.9,
            height: hp(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 10,
        },
        nameText: {
            fontFamily: 'Poppins',
            fontSize: 25,
            color: theme.colors.primary,
        },
        ageText: {
            fontSize: 25,
            fontWeight: '400',
            color: theme.colors.text,
            fontFamily: 'Poppins',
        },
        button: {
            position: 'absolute',
            bottom: hp(0.25),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            zIndex: 3,
            width: wp(22),
            height: hp(10),
        },
        button2: {
            right: wp(0.25),
        },
    })
    const navigation = useNavigation();
    return (
        <View style={{ ...styles.cardBg }}>
            <View style={styles.gradientOverlay}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">{item.name}, </Text>
                    {item.age ? <Text style={styles.ageText}>{item.age}</Text> : null}
                </View>
                <Pressable onPress={() => navigation.navigate('user_details', { item: item })} >
                    <Icon name="dots" size="28" fill={theme.colors.text} strokeWidth="1" />
                </Pressable>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('user_details', { item: item })}>
                <Image
                    style={styles.image}
                    source="https://imgs.search.brave.com/y7FJ6RcZwImUgBuWCg8BO8-jZ5FMLV_NR2dN30NYsig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAxL2x1ZmZ5/LW9wdGltaXN0aWMt/bWF0Y2hpbmctd2Fs/bHBhcGVyLTItcHJl/dmlldy5qcGc"
                    placeholder="https://picsum.photos/seed/696/3000/2000"
                    contentFit="cover"
                    transition={1000}
                />
                <TouchableOpacity onPress={() => navigation.navigate('user_details', { item: item })}>
                    <View style={{ ...styles.button2, ...styles.button }}>
                        <Icon name="menu" size="45" fill={theme.colors.secondaryBg} stroke={theme.colors.secondaryBg} strokeWidth="1" />
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default ExploreCard