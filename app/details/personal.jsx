import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { hp, isDarkMode, wp } from './../../helpers/common'
import { useTheme } from '../../constants/theme'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon, TextInput, ProgressBar } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
import { router } from 'expo-router'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'

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
    const [lookingFor, setLookingFor] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [drinkingHabit, setDrinkingHabit] = useState('')
    const [smokingHabit, setSmokingHabit] = useState('')
    const [relationshipStatus, setRelationshipStatus] = useState('')
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
            marginTop: hp(1.5),
            marginBottom: hp(1),
        },
        input: {
            backgroundColor: theme.colors.primaryBg,
            fontSize: hp(1.8),
            height: hp(7),
            fontFamily: 'Poppins',
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
            borderRadius: 12,
            paddingVertical: hp(2),
            width: '100%',
            overflow: 'hidden',
        },
        buttonContent: {
            height: hp(6),
            borderRadius: theme.borderRadius.lg,
            marginInline: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: hp(2.5),
            fontFamily: 'Poppins',
            textAlign: 'center',
            marginRight: wp(2),
        },
        buttonIcon: {
            color: '#FFFFFF',
            fontSize: hp(2.5),
        },
        errorText: {
            color: '#FF5252',
            fontSize: hp(1.5),
            fontFamily: 'Outfit',
            marginTop: -hp(1.5),
            marginBottom: hp(1),
            marginLeft: wp(2),
        },
    })

    const search = ['Long term relationship', 'One night stand', 'Casual dating', 'Friendship first', 'Dating & Marriage', 'Travel companion']
    const relation = ['Single', 'In a relationship']
    const consumption = ['Occasionally', 'Rarely', 'Monthly', 'Daily', 'Never']

    const validateForm = () => {
        const newErrors = {}
        if (!name) newErrors.name = 'Name is required'
        if (!age) newErrors.age = 'Age is required'
        // if (!lookingFor) newErrors.lookingFor = 'Please select what you are looking for'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const personalDetails = async () => {
        if (validateForm()) {
            router.push("/details/profile_image")
        }
    }

    const renderDropdown = (data, placeholder, value, setter, halfWidth = false, errorKey = null) => (
        <View style={[styles.dropdownContainer, halfWidth && styles.halfWidth]}>
            <SelectDropdown
                data={data}
                defaultValue={value}
                onSelect={(selectedItem) => {
                    setter(selectedItem)
                    if (errorKey) {
                        setErrors({ ...errors, [errorKey]: null })
                    }
                }}
                renderButton={(selectedItem, isOpened) => (
                    <View style={[
                        styles.dropdownButton,
                        isOpened && { borderColor: theme.colors.primary },
                        errorKey && errors[errorKey] && { borderColor: '#FF5252' }
                    ]}>
                        <Text style={[
                            styles.dropdownButtonText,
                            selectedItem && { opacity: 1 },
                            errorKey && errors[errorKey] && { color: '#FF5252' }
                        ]}>
                            {selectedItem || placeholder}
                        </Text>
                        <Icon
                            source={isOpened ? 'chevron-up' : 'chevron-down'}
                            color={theme.colors.text}
                            size={24}
                        />
                    </View>
                )}
                renderItem={(item, index, isSelected) => (
                    <View style={[styles.dropdownItem, isSelected && styles.selectedDropdownItem]}>
                        <Text style={[styles.dropdownItemText, isSelected && styles.selectedDropdownItemText]}>
                            {item}
                        </Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenu}
            />
            {errorKey && errors[errorKey] && (
                <Text style={styles.errorText}>{errors[errorKey]}</Text>
            )}
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.headerContainer}>
                        <View style={styles.progressContainer}>
                            <Text style={styles.progressText}>Step 1 of 2</Text>
                            <ProgressBar progress={0.5} color={theme.colors.primary} style={styles.progressBar} />
                        </View>
                        <Text style={styles.title}>Personal Details</Text>
                        <Text style={styles.subtitle}>Tell us a bit about yourself to help us find your perfect match</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.sectionTitle}>Basic Information</Text>

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
                        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

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
                                keyboardType='default'
                                right={<TextInput.Affix text="cm" />}
                                left={<TextInput.Icon icon="human-male-height" color={theme.colors.text} />}
                            />
                        </View>
                        {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

                        {renderDropdown(search, 'What are you looking for?', lookingFor, setLookingFor, false, 'lookingFor')}

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
                            />
                        </View>

                        <Text style={styles.sectionTitle}>Lifestyle</Text>

                        <View style={styles.row}>
                            {renderDropdown(consumption, 'Drinking Habits', drinkingHabit, setDrinkingHabit, true)}
                            {renderDropdown(consumption, 'Smoking Habits', smokingHabit, setSmokingHabit, true)}
                        </View>

                        {renderDropdown(relation, 'Relationship Status', relationshipStatus, setRelationshipStatus)}

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
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={personalDetails} style={styles.button}>
                            <LinearGradient
                                colors={[theme.colors.primary, theme.colors.primary + 'DD']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.buttonContent}
                            >
                                <Text style={styles.buttonText}>Next ➜</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default personal