import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import { hp, isDarkMode, wp } from '../../helpers/common'
import { Image, ImageBackground } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            flex: 1,
        },
        imageBg: {
            height: hp(45),
            width: wp(100),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            height: hp(20),
            width: hp(20),
            overflow: 'hidden',
            borderRadius: 100,
            borderWidth: 3,
            borderColor: theme.colors.inverted,
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: 35,
            marginTop: 10,
        },
        number: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: 20,
            marginTop: 1,
        },
        textContainer: { width: wp(100), flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
    })
    return (
        <>
            <View style={styles.imageBg}>
                <Image
                    style={styles.image}
                    source="https://imgs.search.brave.com/mcOdqwcFzAhtP2cbePhQ75If1XH6gRMnTebpabURp88/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzExL2hhcHB5/LWx1ZmZ5LXNtaWxp/bmctam95ZnVsLWV4/cHJlc3Npb24tZGVz/a3RvcC13YWxscGFw/ZXItY292ZXIuanBn"
                    contentFit="fill"
                />
                <View style={styles.textContainer}>
                    <Text style={{ ...styles.text, }}>Akshay Dev</Text>
                    <Text style={{ ...styles.number, }}>9048089432</Text>
                </View>
            </View>
        </>
    )
}

export default Header