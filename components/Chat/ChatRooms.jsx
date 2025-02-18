import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme';
import { Image } from 'expo-image';
import { hp } from '../../helpers/common';

const ChatRooms = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            // backgroundColor: theme.colors.secondaryBg,
            marginInline: 10,
            padding: 10,
            borderRadius: theme.borderRadius.lg,
            justifyContent: 'space-between',
        },
        image: {
            height: hp(8),
            width: hp(8),
            overflow: 'hidden',
            borderRadius: 100,
        },
        flex: {
            display: 'flex',
            flexDirection: 'row',
        },
        text: {
            fontFamily: 'Poppins',
            fontWeight: theme.fontWeights.medium,
            marginTop: 7,
            color: theme.colors.text,
        }
    })
    return (
        <View style={{ ...styles.bg, ...styles.flex }}>
            <View style={{ ...styles.flex, gap: 20 }}>
                <Image
                    style={styles.image}
                    source="https://imgs.search.brave.com/mcOdqwcFzAhtP2cbePhQ75If1XH6gRMnTebpabURp88/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzExL2hhcHB5/LWx1ZmZ5LXNtaWxp/bmctam95ZnVsLWV4/cHJlc3Npb24tZGVz/a3RvcC13YWxscGFw/ZXItY292ZXIuanBn"
                    contentFit="fill"
                />
                <View>
                    <Text style={{ fontSize: theme.fontSizes.lg, ...styles.text }}>Muhammed Suhail</Text>
                    <View style={{ ...styles.flex, gap: 5 }}>
                        <Text style={{ color: "green", fontSize: 15 }}>✓</Text>
                        <Text style={{ color: theme.colors.text, fontFamily: 'Poppins' }}>Perfect, Will check later</Text>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 12, ...styles.text, marginTop: 12.5 }}>Yesterday</Text>
        </View>
    )
}

export default ChatRooms