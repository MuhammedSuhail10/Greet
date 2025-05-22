import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import SelectDropdown from 'react-native-select-dropdown'
import { useFonts } from 'expo-font'
import { hp, isDarkMode, wp } from '../../helpers/common'
import { useTheme } from '../../constants/theme'
import { ProgressBar, Icon } from 'react-native-paper'
import { router, useLocalSearchParams } from 'expo-router'
import SnackBar from '../../components/SnackBar'

const personal2 = () => {
    const [loaded, error] = useFonts({
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    })
    const dark = isDarkMode()
    const theme = useTheme();
    const { name, age, height, city, state, bio } = useLocalSearchParams();
    const [drinkingHabit, setDrinkingHabit] = useState('')
    const [smokingHabit, setSmokingHabit] = useState('')
    const [relationshipStatus, setRelationshipStatus] = useState('')
    const [lookingFor, setLookingFor] = useState('')
    const [errors, setErrors] = useState({})
    const [errorMsg, setError] = useState("")
    const [snackVisible, setSnackVisible] = useState(false);
    const [snackKey, setSnackKey] = useState(0);
    const [datas, setData] = useState({});

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
            marginVertical: "10",
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
            padding: 10,
            borderRadius: 12,
            backgroundColor: theme.colors.primaryBg,
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

    const search = ['Long term relationship', 'One night stand', 'Casual dating', 'Friendship first', 'Dating & Marriage', 'Travel companion']
    const relation = ['Single', 'In a relationship']
    const consumption = ['Occasionally', 'Rarely', 'Monthly', 'Daily', 'Never']

    const validateForm = () => {
        const newErrors = {}
        if (!drinkingHabit) newErrors.drinkingHabit = 'Is required';
        if (!lookingFor) newErrors.lookingFor = 'Is required'
        if (!relationshipStatus) newErrors.relationshipStatus = 'Is required';
        if (!smokingHabit) newErrors.smokingHabit = 'Is required';
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const personalDetails = async () => {
        if (validateForm()) {
            console.log(name, age, height, city, state, bio, lookingFor, drinkingHabit, smokingHabit, relationshipStatus)
            setData({
                name,
                age,
                height,
                city,
                state,
                bio,
                lookingFor,
                drinkingHabit,
                smokingHabit,
                relationshipStatus
            })
            console.log(datas)
            router.push({
                pathname: "/details/profile_image",
                params: {"data": JSON.stringify(datas) }
            })
        } else {
            setError("Every field is required.")
            setSnackVisible(true);
            setSnackKey(Date.now());
        }
    }

    const renderDropdown = (data, placeholder, value, setter, errorKey = null) => (
        <View style={[styles.dropdownContainer]}>
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
        </View>
    )
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
                <View style={styles.headerContainer}>
                    <View style={styles.progressContainer}>
                        <Text style={styles.progressText}>Step 2 of 3</Text>
                        <ProgressBar progress={0.7} color={theme.colors.primary} style={styles.progressBar} />
                    </View>
                    <Text style={styles.title}>Personal Details</Text>
                    <Text style={styles.subtitle}>Tell us a bit about yourself to help us find your perfect match</Text>
                </View>
                <View style={styles.inputContainer}>
                    {renderDropdown(search, 'What are you looking for?', lookingFor, setLookingFor, false, 'lookingFor')}
                    <Text style={styles.sectionTitle}>Lifestyle</Text>
                    {renderDropdown(consumption, 'Drinking Habits', drinkingHabit, setDrinkingHabit, true)}
                    {renderDropdown(consumption, 'Smoking Habits', smokingHabit, setSmokingHabit, true)}
                    {renderDropdown(relation, 'Relationship Status', relationshipStatus, setRelationshipStatus)}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={personalDetails} style={[styles.button]}  >
                        <Text style={styles.buttonLabel}>Continue</Text>
                    </TouchableOpacity>
                </View>
                {snackVisible && <SnackBar key={snackKey} text={errorMsg} />}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default personal2;