import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import Items from './Items';

const Overview = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.secondaryBg,
            width: wp(100),
            height: hp(60),
            paddingInline: 10,
            borderRadius: theme.borderRadius.lg,
            marginTop: hp(-5),
        },
        heading: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 20,
            margin: 20,
            marginBottom: 0
        },
        container: {
            marginTop: 15
        },
        flex: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
        button: { width: wp(90), marginInline: 5, borderRadius: theme.borderRadius.full, marginTop: 20 },
        text: { color: theme.colors.inverted, fontFamily: 'Poppins', fontSize: 18, paddingTop: 5, marginBlock: 10 }
    })
    return (
        <View style={styles.bg}>
            {/* <Text style={styles.heading}>Account Overview</Text> */}
            <View style={styles.container}>
                <Items title="Personal Information" icon="profile" to="profile" />
                <Items title="Preference" icon="preference" to="preference" />
                <Items title="Recently Viewed Profiles" icon="recent" to="recent" />
                <Items title="Settings" icon="settings" to="settings" />
            </View>
            <Pressable onPress={() => console.log("logged out")} style={({ pressed }) => [{backgroundColor: pressed ? theme.colors.text: theme.colors.primary ,}, styles.button, ]}>
                <View style={styles.flex}>
                    <Text style={styles.text}>Logout</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Overview