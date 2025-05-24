import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'
import { Link } from 'expo-router'
import Icon from '../../assets/icons'
import { hp, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme'

const InfoHeader = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        image: {
            height: hp(65),
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            width: '100%',
            overflow: 'hidden'
        },
        topIcons: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        iconBg: {
            backgroundColor: theme.colors.primary,
            width: 43,
            height: 43,
            margin: 15,
            borderRadius: 30,
            display: 'flex',
            flexDirection: 'row',
            padding: 11,
            opacity: 0.7,
        },
        iconGroup: {
            backgroundColor: theme.colors.primary,
            width: wp(10),
            height: hp(5),
            margin: 15,
            borderRadius: 30,
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            opacity: 0.5,
        },
    })
    return (
        <ImageBackground style={styles.image} source="https://imgs.search.brave.com/PjE33tVn9FgNIvLyiXIda3Iuc-QnbB3f_cexAHHWsHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" >
            <View style={styles.topIcons}>
                <Link href="../" asChild>
                    <TouchableOpacity style={styles.iconBg} >
                        <Icon name="back" fill="#ffff" size="20" strokeWidth="1" />
                    </TouchableOpacity>
                </Link>
            </View>
        </ImageBackground>
    )
}

export default InfoHeader