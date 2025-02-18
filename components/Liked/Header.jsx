import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import Icon from '../../assets/icons'
import { wp } from '../../helpers/common'

const Header = ({ height, title }) => {
    const theme = useTheme();
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
            fontFamily: 'Outfit',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 10
        },
    })
    return (
        <View style={{ height: { height }, ...styles.bg }}>
            <View style={{ width: wp(100), flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ ...styles.text, }}>Wishlist</Text>
            </View>
        </View>
    )
}

export default Header;