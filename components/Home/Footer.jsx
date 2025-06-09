import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme';
import Icon from './../../assets/icons/index';
import { useNavigation } from 'expo-router';
import { hp, wp } from '../../helpers/common';

const Footer = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            height: hp(15),
            marginTop: hp(1),
            paddingInline: wp(8),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp(100),
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'flex-end',
            width: wp(22),
            height: hp(14),
        },
        row2: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'flex-start',
            width: wp(22),
            height: hp(14),
        },
        button: {
            padding: wp(5),
            borderWidth: 0.2,
            borderColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.secondaryBg,
        },
        button2: {
            padding: wp(6),
            borderWidth: 0.2,
            borderColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.full,
            backgroundColor: theme.colors.primary,
        },
    })

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={{}}>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Icon name="close" size="35" stroke={theme.colors.text} strokeWidth="1" />
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={{}}>
                <View style={styles.row2}>
                    <View style={styles.button2}>
                        <Icon name="chat" size="42" fill={theme.colors.inverted} strokeWidth="1" />
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={{}}>
                <View style={styles.row}>
                    <View style={styles.button}>
                        <Icon name="heart_fill" size="40" fill={theme.colors.text} strokeWidth="1" />
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Footer;