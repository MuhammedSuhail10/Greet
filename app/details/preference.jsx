import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { hp, isDarkMode, wp } from './../../helpers/common';
import { useTheme } from '../../constants/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';

const preference = () => {
    const [loaded, error] = useFonts({
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    });
    const dark = isDarkMode();
    const theme = useTheme();
    const [name, setName] = useState('');
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
        },
        keyboardAvoid: {
            flex: 1,
        },
        text: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: 35,
            marginTop: 10,
        },
        title: {
            color: theme.colors.text,
            fontSize: hp(4),
            fontFamily: 'Poppins',
            fontWeight: 700,
            marginTop: 10,
            paddingInline: 20
        },
        inputContainer: {
            padding: wp(5),
        },
        input: {
            paddingInline: 20,
            backgroundColor: theme.colors.primaryBg,
            fontSize: 20,
            height: hp(7),
            fontFamily: 'Poppins',
            borderColor: theme.colors.secondaryBg,
            marginBottom: 20,
            width: wp(90)
        },
        halfWidth: { width: wp(42.5) },
        dropdownButtonStyle: {
            width: 200,
            height: 50,
            backgroundColor: '#E9ECEF',
            borderRadius: 20,
            paddingHorizontal: 12,
        },
        dropdownButtonTxtStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: '500',
            color: theme.colors.text
        },
        dropdownMenuStyle: {
            borderRadius: 20,
        },
        dropdownItemStyle: {
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: theme.colors.secondaryBg,
        },
        dropdownItemTxtStyle: {
            flex: 1,
            fontSize: 18,
            fontWeight: '500',
            color: theme.colors.text,
            padding: 5
        },
        bioInput: {
            height: hp(15),
            textAlignVertical: 'top',
        },
        button: {
            backgroundColor: theme.colors.primary,
            borderRadius: 12,
            paddingVertical: 16,
            paddingHorizontal: 24,
            width: wp(30),
            maxWidth: 400,
            alignSelf: 'flex-end',
            marginInline: 32,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
        },
    })
    const search = ['Long term relationship', 'One night stand', 'Casual dating', 'Friendship first', 'Dating & Marriage', 'Travel companion',];
    const relation = ['Single', 'In relation',];
    const consumption = ['Occasionally', 'Rarely', 'Monthly', 'Daily', 'Never'];

    const personalDetails = async () => {

        // Personal data api

        console.log("first")
        router.push("/details/profile_image");
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoid}
            >
                <Text style={styles.title}>Preference</Text>
                <View style={styles.inputContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            mode="outlined"
                            label="Age"
                            style={{ ...styles.input, ...styles.halfWidth }}
                            activeOutlineColor={theme.colors.primary}
                            theme={{ roundness: 50 }}
                            textColor={theme.colors.text}
                            outlineColor={theme.colors.LessOpacity}
                            keyboardType='number-pad'
                        />
                        <TextInput
                            mode="outlined"
                            label="Height"
                            style={{ ...styles.input, ...styles.halfWidth }}
                            activeOutlineColor={theme.colors.primary}
                            theme={{ roundness: 50 }}
                            textColor={theme.colors.text}
                            outlineColor={theme.colors.LessOpacity}
                            keyboardType='default'
                            right={<TextInput.Affix text="/in" />}
                        />
                    </View>
                    <SelectDropdown
                        data={search}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem);
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={{ ...styles.input, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.LessOpacity, borderRadius: 50, }}>
                                    <Text style={styles.dropdownButtonTxtStyle}>{(selectedItem) || 'Looking for?'}</Text>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: theme.colors.primary }) }}>
                                    <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            mode="outlined"
                            label="City"
                            style={{ ...styles.input, ...styles.halfWidth }}
                            activeOutlineColor={theme.colors.primary}
                            theme={{ roundness: 50 }}
                            textColor={theme.colors.text}
                            outlineColor={theme.colors.LessOpacity}
                            keyboardType='default'
                        />
                        <TextInput
                            mode="outlined"
                            label="State"
                            style={{ ...styles.input, ...styles.halfWidth }}
                            activeOutlineColor={theme.colors.primary}
                            theme={{ roundness: 50 }}
                            textColor={theme.colors.text}
                            outlineColor={theme.colors.LessOpacity}
                            keyboardType='default'
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <SelectDropdown
                            data={consumption}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={{ ...styles.input, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.LessOpacity, borderRadius: 50, ...styles.halfWidth }}>
                                        <Text style={styles.dropdownButtonTxtStyle}>{(selectedItem) || 'Drinker?'}</Text>
                                    </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: theme.colors.primary }) }}>
                                        <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={styles.dropdownMenuStyle}
                        />
                        <SelectDropdown
                            data={consumption}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={{ ...styles.input, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.LessOpacity, borderRadius: 50, ...styles.halfWidth }}>
                                        <Text style={styles.dropdownButtonTxtStyle}>{(selectedItem) || 'Smoker?'}</Text>
                                    </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: theme.colors.primary }) }}>
                                        <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={styles.dropdownMenuStyle}
                        />
                    </View>
                    <SelectDropdown
                        data={relation}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem);
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={{ ...styles.input, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.LessOpacity, borderRadius: 50, }}>
                                    <Text style={styles.dropdownButtonTxtStyle}>{(selectedItem) || 'Relationship status'}</Text>
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: theme.colors.primary }) }}>
                                    <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                    <TouchableOpacity onPress={() => personalDetails()} style={[styles.button]}>
                        <Text style={styles.buttonText}>Next ➜</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default preference