import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import Icon from '../../assets/icons'
import { hp, wp } from '../../helpers/common'

const Header = ({ height }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            width: '100%',
            paddingInline: 10,
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: 10
        },
        input: {
            backgroundColor: theme.colors.secondaryBg,
            height: hp(6.5),
            marginBlock: 15,
            padding: 15,
            color: theme.colors.text,
            borderRadius: theme.borderRadius.md,
            zIndex: 0,
            fontFamily: 'Poppins'
        },
    })
    return (
        <View style={{ height: { height }, ...styles.bg }}>
            <View style={{ width: wp(100), flexDirection: 'column', justifyContent: 'center', }}>
                <Text style={{ ...styles.text, }}>Conversations</Text>
            </View>
            <Icon name="search" size={25} color={theme.colors.inverted} style={{ marginRight: 10, position: 'absolute', top: hp(8.5), right: 30, zIndex: 1 }} />
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={value}
                placeholder="Search"
                placeholderTextColor={theme.colors.text}
            />
        </View>
    )
}

export default Header;