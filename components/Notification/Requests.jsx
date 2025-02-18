import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { isDarkMode, wp } from '../../helpers/common';
import { useTheme } from '../../constants/theme';
import Icon from '../../assets/icons';

const Requests = () => {
    const theme = useTheme();
    const dark = isDarkMode();
    const styles = StyleSheet.create({
        iconBg: {
            width: wp(7),
            padding: 25,
            height: wp(7),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: theme.colors.secondaryBg,
            borderRadius: 50,
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 16.5
        },
    })
    return (
        <View style={{ margin: 13, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <View style={styles.iconBg}>
                <Icon name="requests" size="30" color={theme.colors.text} fill={theme.colors.secondaryBg} strokeWidth="1" />
            </View>
            <View>
                <Text style={styles.text}>Requests </Text>
                <Text style={{...styles.text, fontSize: 12.5}}>Approve or ignore requests </Text>
            </View>
        </View>
    )
}

export default Requests