import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { ImageBackground } from 'expo-image';
import { hp, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme';
import { Link, useNavigation } from 'expo-router';

const NearbyCard = ({ item }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        cardBg: {
            margin: 10,
            width: wp(45),
            height: hp(30),
            borderColor: '#fff',
            borderRadius: 20,
        },
        image: {
            height: hp(30),
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            width: '100%',
            overflow: 'hidden'
        },
        textContainer: {
            position: 'absolute',
            backgroundColor: theme.colors.primaryBg,
            bottom: -3,
            left: 0,
            width: "70%",
            height: 40,
            borderTopEndRadius: 18,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        age: {
            fontFamily: 'Poppins',
            fontSize: 18,
            color: theme.colors.primary,
            paddingRight: 10
        },
        name: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            width: '75%',
            fontSize: 18
        },
    })
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('user_details', { item: item })} style={{ ...styles.cardBg }}>
            <ImageBackground style={styles.image} source="https://imgs.search.brave.com/PjE33tVn9FgNIvLyiXIda3Iuc-QnbB3f_cexAHHWsHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" >
                <View style={styles.textContainer}>
                    <Text style={styles.name} numberOfLines={1}>{item.name},</Text>
                    <Text style={styles.age}>{item.age}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default NearbyCard