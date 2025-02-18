import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { isDarkMode } from '../../helpers/common';
import { useTheme } from '../../constants/theme';

const success = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.primaryBg,
            padding: 20,
        },
        successCircle: {
            marginBottom: 30,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.primary,
            marginBottom: 16,
        },
        subtitle: {
            fontSize: 16,
            color: theme.colors.LessOpacity,
            textAlign: 'center',
            marginBottom: 40,
            paddingHorizontal: 20,
        },
        button: {
            backgroundColor: theme.colors.LessOpacity,
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 25,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Created!</Text>
            <Text style={styles.subtitle}>
                Your profile has been successfully created. You can now start using the app.
            </Text>

            <Pressable
                style={styles.button}
                onPress={() => router.replace('/home')}
            >
                <Text style={styles.buttonText}>Lets explore</Text>
            </Pressable>
        </View>
    )
}

export default success