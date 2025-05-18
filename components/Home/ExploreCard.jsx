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
            marginTop: 15,
            width: wp(95),
        },
        image: {
            height: hp(70),
            borderRadius: 20,
            width: '100%',
            overflow: 'hidden'
        },
        basics: {
            // marginBlock: 10,
            backgroundColor: theme.colors.secondaryBg,
        },
        button: {
            position: 'absolute',
            bottom: wp(3),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            zIndex: 3,
            width: wp(18),
            height: hp(8),
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.inverted,
            opacity: 0.9
        },
        button2: {
            right: wp(3),
            backgroundColor: theme.colors.secondaryBg,
        },
        text: {
            fontFamily: 'Poppins',
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.medium,
            marginTop: 7,
        },
        gradientOverlay: {
            opacity: 0.9,
            height: hp(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: 15,
            backgroundColor: theme.colors.secondaryBg,
        },
        nameText: {
            fontFamily: 'Poppins',
            fontSize: 21,
            color: theme.colors.text,
        },
        ageText: {
            fontSize: 21,
            fontWeight: '400',
            color: theme.colors.text ,
            fontFamily: 'Poppins',
        },
    })
    const navigation = useNavigation();
    return (
        <View style={{ ...styles.cardBg }}>
            <TouchableOpacity onPress={() => navigation.navigate('user_details', { item: item })}>
                <View style={{ position: 'relative' }}>
                    <ImageBackground
                        style={styles.image}
                        source="https://imgs.search.brave.com/y7FJ6RcZwImUgBuWCg8BO8-jZ5FMLV_NR2dN30NYsig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAxL2x1ZmZ5/LW9wdGltaXN0aWMt/bWF0Y2hpbmctd2Fs/bHBhcGVyLTItcHJl/dmlldy5qcGc"
                        contentFit="cover"
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <View style={styles.gradientOverlay}>
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
                                    {item.name}{item.age ? <Text style={styles.ageText}>, {item.age}</Text> : null}
                                </Text>
                            </View>
                            <Pressable onPress={() => navigation.navigate('user_details', { item: item })} >
                                <Icon name="dots" size="28" fill={theme.colors.text} strokeWidth="1" />
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            <View style={{ ...styles.button2, ...styles.button }}>
                <Icon name="heart_fill" size="28" fill={theme.colors.text} strokeWidth="1" />
            </View>
        </View>
    )
}

export default ExploreCard