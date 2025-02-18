import { StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../constants/theme'
import Icon from '../../assets/icons'

const InfoActions = () => {
    const [fav, setFav] = useState(false);
    const theme = useTheme();
    const styles = StyleSheet.create({
        main: {
            margin: 5,
            padding: 15,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
        },
        name: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: theme.fontSizes['2xl'],
            fontWeight: theme.fontWeights.medium,
        }
    })
    const changeFav = () => {
        setFav((prevFav) => !prevFav);
    };
    return (
        <View style={styles.main}>
            <Text style={styles.name}>Akshay Dev, 30</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                <Pressable onPress={() => changeFav()}>
                    {fav ? <Icon name="heart_fill" fill={theme.colors.primary} size="30" /> : <Icon name="heart" fill={theme.colors.text} size="30" />}
                </Pressable>
                <TouchableOpacity onPress={() => console.log("Menu triggered")}>
                    <Icon name="dots" fill={theme.colors.text} size="30" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InfoActions