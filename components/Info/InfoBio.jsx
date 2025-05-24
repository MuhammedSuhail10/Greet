import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import Icon from './../../assets/icons/index';

const InfoBio = () => {
    const theme = useTheme()
    const styles = StyleSheet.create({
        main: {
            backgroundColor: theme.colors.secondaryBg,
            marginInline: 20,
            padding: 18,
            borderRadius: theme.borderRadius.md,
            position: 'relative',
            marginBottom: 90,
            shadowColor: "#fff",
            shadowRadius: 10,
            elevation: 2,
            shadowOffset: { width: 35, height: 35 }
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 17,
            paddingTop: 10
        },
        sub: {
            margin: 10,
        }
    })
    return (
        <View style={styles.main}>
            <View style={styles.sub}>
                <Text style={{ ...styles.text, fontSize: 21, fontWeight: theme.fontWeights.extrabold }}>Bio</Text>
                {/* <Icon name="bio" fill={theme.colors.primary} size="40" strokeWidth="1" /> */}
                <Text style={{ ...styles.text }}>kds dfik df ff d dg b dfvb df fvdf vdfv vf vdfv fv fv df vdf vfbv fbv fvdfv  ffv </Text>
            </View>
        </View>
    )
}

export default InfoBio