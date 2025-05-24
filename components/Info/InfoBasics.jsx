import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import { wp } from '../../helpers/common';

const InfoBasics = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        main: {
            backgroundColor: theme.colors.secondaryBg,
            marginInline: 20,
            padding: 18,
            borderRadius: theme.borderRadius.md,
            position: 'relative',
            marginBottom: 20,
            shadowColor: "#fff",
            shadowRadius: 10,
            elevation: 2,
            shadowOffset: { width: 35, height: 35 }
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 17,
        },
        sub: {
            margin: 10,
        }
    })
    return (
        <View style={styles.main}>
            <Text style={{ ...styles.text, fontSize: 21, fontWeight: theme.fontWeights.extrabold }}>Basics</Text>
            <View style={styles.sub}>
                <Text style={{ ...styles.text }}>📍  Kakkanad, Ernakulam</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ ...styles.text, fontSize: 25 }}> ⚥</Text>
                        <Text style={{ ...styles.text }}>  Single</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ ...styles.text, }}> 📏  5'4"</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ ...styles.text, }}> 🟢 Available for meet and chat</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 6  }}>
                    <Text style={{ ...styles.text, }}> 🚬 Occational Smoker</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                    <Text style={{ ...styles.text, }}> 🥂  Occational Drinker</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30, marginTop: 6 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...styles.text, }}> 🚀 Long time relation</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InfoBasics