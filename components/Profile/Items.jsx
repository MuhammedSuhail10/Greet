import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import Icon from './../../assets/icons/index';

const Items = ({ title, to, icon }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            paddingInline: 20,
            marginTop: 15
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 18,
            margin: 20,
            paddingTop: 5
        },
        flex: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        iconBg: { backgroundColor: theme.colors.primary, borderRadius: 10, padding: 8 }
    })
    return (
        <Pressable onPress={() => console.log(to)} style={({ pressed }) => ({ backgroundColor: pressed ? theme.colors.primaryBg : theme.colors.secondaryBg, width: wp(90), marginInline: 5, paddingInline: 10, borderRadius: theme.borderRadius.lg, marginBlock: 5 })}>
            <View style={{ ...styles.flex, justifyContent: 'space-between' }}>
                <View style={styles.flex}>
                    <View style={styles.iconBg}>
                        <Icon name={icon} fill="white" size="25" strokeWidth="1" />
                    </View>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <Icon name="right_arrow" fill={theme.colors.text} size="25" strokeWidth="1" />
            </View>
        </Pressable>
    )
}

export default Items