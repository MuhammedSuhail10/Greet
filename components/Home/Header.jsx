import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import Icon from '../../assets/icons'
import { wp } from '../../helpers/common'
import { useNavigation } from 'expo-router'

const Header = ({ height, title }) => {
    const theme = useTheme();
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            width: '100%',
            paddingInline: 10,
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 25,
            fontWeight: '700',
        },
    })
    return (
        <View style={{ height: { height }, ...styles.bg }}>
            <View style={{ width: wp(75), flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ ...styles.text, }}>{title}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: wp(15), alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                    <Icon name="notification" fill={theme.colors.text} size="25" strokeWidth="1" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;