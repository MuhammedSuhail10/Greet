import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp } from '../helpers/common'
import { useTheme } from '../constants/theme'

const FAB = ({ text, bottom }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    button: {
      width: wp(70),
      height: 60,
      borderRadius: 30,
      backgroundColor: '#ee6e73',
      position: 'absolute',
      bottom: bottom,
      left: wp(15),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: 'center',
      zIndex: 3
    },
    text: {
      color: "#fff",
      fontFamily: 'Poppins',
      fontSize: theme.fontSizes.lg,
      fontWeight: theme.fontWeights.medium,
      marginTop: 7,
    }
  })
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default FAB