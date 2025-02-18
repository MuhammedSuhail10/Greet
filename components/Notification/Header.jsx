import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../constants/theme';
import { wp } from '../../helpers/common';
import { Link } from 'expo-router';
import Icon from '../../assets/icons';

const Header = ({ height }) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        bg: {
            backgroundColor: theme.colors.primaryBg,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginInline: 15
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontWeight: 'bold',
            fontSize: 30,
        },
    })
    return (
        <View style={{ height: { height }, ...styles.bg }}>
            <View style={{ width: wp(100), flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                <Link href="../" asChild>
                    <TouchableOpacity style={styles.iconBg} >
                        <Icon name="back" fill={theme.colors.text} size="20" strokeWidth="1" />
                    </TouchableOpacity>
                </Link>
                <Text style={{ ...styles.text, }}>Notification</Text>
            </View>
        </View>
    )
}

export default Header