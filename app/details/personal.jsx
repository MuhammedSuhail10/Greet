import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { hp, isDarkMode, wp } from './../../helpers/common'
import { useTheme } from '../../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, TextInput, ProgressBar } from 'react-native-paper'
import { router } from 'expo-router'
import { useFonts } from 'expo-font'

const personal = () => {
    const [loaded, error] = useFonts({
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    })

    const dark = isDarkMode()
    const theme = useTheme()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [bio, setBio] = useState('')
    const [errors, setErrors] = useState({})

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
        },
        headerContainer: {
            paddingHorizontal: wp(5),
            paddingTop: hp(1),
        },
        progressContainer: {
            marginTop: 10,
            marginBottom: 10,
        },
        progressText: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: 14,
            marginBottom: 6,
            opacity: 0.8,
            textAlign: 'right',
        },
        progressBar: {
            height: 6,
            borderRadius: 3,
        },
        title: {
            color: theme.colors.text,
            fontSize: hp(3.5),
            fontFamily: 'Poppins',
            fontWeight: '700',
            marginTop: hp(1),
        },
        subtitle: {
            color: theme.colors.text,
            fontSize: hp(1.8),
            fontFamily: 'Outfit',
            marginTop: hp(0.5),
            opacity: 0.7,
        },
        inputContainer: {
            padding: wp(5),
        },
        sectionTitle: {
            color: theme.colors.text,
            fontSize: hp(2),
            fontFamily: 'Outfit',
            fontWeight: '600',
        },
        input: {
            backgroundColor: theme.colors.primaryBg,
            fontSize: hp(1.7),
            height: hp(7),
            fontFamily: 'Outfit',
            borderColor: theme.colors.secondaryBg,
            marginBottom: hp(2),
            width: '100%',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        halfWidth: {
            width: '48%'
        },
        dropdownContainer: {
            marginBottom: hp(2),
        },
        dropdownButton: {
            width: '100%',
            height: hp(7),
            borderWidth: 1,
            borderColor: theme.colors.LessOpacity,
            borderRadius: 12,
            paddingHorizontal: wp(4),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.primaryBg,
        },
        dropdownButtonText: {
            flex: 1,
            fontSize: hp(1.8),
            fontFamily: 'Poppins',
            color: theme.colors.text,
            opacity: 0.8,
        },
        dropdownMenu: {
            borderRadius: 12,
            backgroundColor: theme.colors.secondaryBg,
        },
        dropdownItem: {
            width: '100%',
            paddingVertical: hp(1.5),
            paddingHorizontal: wp(4),
            backgroundColor: 'transparent',
        },
        dropdownItemText: {
            fontSize: hp(1.8),
            fontFamily: 'Poppins',
            color: theme.colors.text,
        },
        selectedDropdownItem: {
            backgroundColor: theme.colors.primary + '20',
        },
        selectedDropdownItemText: {
            color: theme.colors.primary,
            fontWeight: '600',
        },
        bioInput: {
            height: hp(15),
            textAlignVertical: 'top',
        },
        buttonContainer: {
            padding: wp(5),
            paddingTop: 0,
        },
        button: {
            borderRadius: 10,
            padding: hp(2),
            width: wp(50),
            alignSelf: 'center',
            backgroundColor: theme.colors.primary,
        },
        buttonLabel: {
            color: "#fff",
            fontSize: 16,
            fontFamily: 'Poppins',
            textAlign: 'center',
        },
        buttonDisabled: {
            backgroundColor: theme.colors.secondaryBg,
        },
        errorText: {
            color: '#FF5252',
            fontSize: hp(1.7),
            fontFamily: 'Outfit',
            marginTop: -hp(1.5),
            marginBottom: hp(0.5),
            marginLeft: wp(2),
        },
    })

    const validateForm = () => {
        const newErrors = {}
        if (!name) newErrors.name = 'Name is required';
        if (!age) newErrors.age = 'Age is required';
        if (!height) newErrors.height = 'Height is required';
        if (!city) newErrors.city = 'City is required';
        if (!state) newErrors.state = 'State is required';
        if (!bio) newErrors.bio = 'Bio is required';
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const personalDetails = async () => {
        if (validateForm()) {
            router.push({
                pathname: "/details/personal2",
                params: {"name": name, "age": age, "height": height, "city": city, "state": state, "bio": bio }
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
                <View style={styles.headerContainer}>
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>Step 1 of 3</Text>
                        <ProgressBar progress={0.3} color={theme.colors.primary} style={styles.progressBar} />
                    </View>
                    <Text style={styles.title}>Personal Details</Text>
                    <Text style={styles.subtitle}>Tell us a bit about yourself to help us find your perfect match</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.sectionTitle}>Basic Information</Text>

                    {/* Name */}
                    <TextInput
                        mode="outlined"
                        label="Full Name"
                        value={name}
                        onChangeText={(text) => {
                            setName(text)
                            if (errors.name) setErrors({ ...errors, name: null })
                        }}
                        style={styles.input}
                        activeOutlineColor={theme.colors.primary}
                        outlineColor={errors.name ? '#FF5252' : theme.colors.LessOpacity}
                        theme={{ roundness: 12 }}
                        textColor={theme.colors.text}
                        left={<TextInput.Icon icon="account" color={theme.colors.text} />}
                        error={!!errors.name}
                    />

                    {/* Age and Height */}
                    <View style={styles.row}>
                        <TextInput
                            mode="outlined"
                            label="Age"
                            value={age}
                            onChangeText={(text) => {
                                setAge(text)
                                if (errors.age) setErrors({ ...errors, age: null })
                            }}
                            style={[styles.input, styles.halfWidth]}
                            activeOutlineColor={theme.colors.primary}
                            outlineColor={errors.age ? '#FF5252' : theme.colors.LessOpacity}
                            theme={{ roundness: 12 }}
                            textColor={theme.colors.text}
                            keyboardType='number-pad'
                            left={<TextInput.Icon icon="calendar" color={theme.colors.text} />}
                            error={!!errors.age}
                        />

                        <TextInput
                            mode="outlined"
                            label="Height"
                            value={height}
                            onChangeText={setHeight}
                            style={[styles.input, styles.halfWidth]}
                            activeOutlineColor={theme.colors.primary}
                            outlineColor={theme.colors.LessOpacity}
                            theme={{ roundness: 12 }}
                            textColor={theme.colors.text}
                            keyboardType='number-pad'
                            right={<TextInput.Affix text="cm" />}
                            left={<TextInput.Icon icon="human-male-height" color={theme.colors.text} />}
                            error={!!errors.height}
                        />
                    </View>

                    {/* Location */}
                    <Text style={styles.sectionTitle}>Location</Text>
                    <View style={styles.row}>
                        <TextInput
                            mode="outlined"
                            label="City"
                            value={city}
                            onChangeText={setCity}
                            style={[styles.input, styles.halfWidth]}
                            activeOutlineColor={theme.colors.primary}
                            outlineColor={theme.colors.LessOpacity}
                            theme={{ roundness: 12 }}
                            textColor={theme.colors.text}
                            left={<TextInput.Icon icon="city" color={theme.colors.text} />}
                            error={!!errors.city}
                        />
                        <TextInput
                            mode="outlined"
                            label="State"
                            value={state}
                            onChangeText={setState}
                            style={[styles.input, styles.halfWidth]}
                            activeOutlineColor={theme.colors.primary}
                            outlineColor={theme.colors.LessOpacity}
                            theme={{ roundness: 12 }}
                            textColor={theme.colors.text}
                            left={<TextInput.Icon icon="map-marker" color={theme.colors.text} />}
                            error={!!errors.state}
                        />
                    </View>

                    {/* Bio */}
                    <Text style={styles.sectionTitle}>About You</Text>
                    <TextInput
                        mode="outlined"
                        label="Tell potential matches about yourself..."
                        value={bio}
                        onChangeText={setBio}
                        style={[styles.input, styles.bioInput]}
                        activeOutlineColor={theme.colors.primary}
                        outlineColor={theme.colors.LessOpacity}
                        theme={{ roundness: 12 }}
                        textColor={theme.colors.text}
                        multiline
                        numberOfLines={4}
                        placeholder="Short note on yourself..."
                        left={<TextInput.Icon icon="text" color={theme.colors.text} />}
                        error={!!errors.bio}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={personalDetails} style={[styles.button]}  >
                        <Text style={styles.buttonLabel}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default personal