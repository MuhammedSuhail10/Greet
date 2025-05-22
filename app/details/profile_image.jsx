import { Pressable, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../constants/theme'
import { hp, isDarkMode, wp } from '../../helpers/common'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ImageViewer from '../../components/ImageViewer'
import { useFonts } from 'expo-font'
import * as ImagePicker from 'expo-image-picker'
import { router, useLocalSearchParams } from 'expo-router'
import { Icon, ProgressBar, ActivityIndicator } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

const profile_image = () => {
    const dark = isDarkMode()
    const theme = useTheme()
    const [loaded, error] = useFonts({
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    })
    const { data } = useLocalSearchParams();
    const [selected, setSelected] = useState(false)
    const [selectedImage, setSelectedImage] = useState(undefined)
    const [uploading, setUploading] = useState(false)

    const PlaceholderImage = 'https://imgs.search.brave.com/awksT_Zoh8G9Qn5d-CbZP4gAPcl0EDxLP0J88fgAnB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/ODA1MTU2L3ZlY3Rv/ci9wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2t2TERDZ3NI/SC04SGVRZTdKc2po/bE9ZNnZSQkprX3NL/VzlseWFMZ21Mbz0'
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
        },
        headerContainer: {
            paddingHorizontal: wp(5),
            paddingTop: hp(1),
            paddingBottom: hp(2),
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
        },
        description: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: hp(1.8),
            marginTop: hp(1),
            opacity: 0.8,
            lineHeight: hp(2.5),
        },
        contentContainer: {
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: wp(5),
        },
        imageContainer: {
            marginTop: hp(4),
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageWrapper: {
            width: hp(35),
            height: hp(35),
            borderRadius: hp(17.5),
            backgroundColor: theme.colors.secondaryBg,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderWidth: 3,
            borderColor: theme.colors.primary + '40',
        },
        image: {
            width: '100%',
            height: '100%',
            borderRadius: hp(17.5),
        },
        placeholderIcon: {
            opacity: 0.5,
        },
        editButtonContainer: {
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: theme.colors.primary,
            width: hp(7),
            height: hp(7),
            borderRadius: hp(3.5),
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
        },
        tipContainer: {
            marginTop: hp(4),
            padding: hp(2),
            backgroundColor: theme.colors.secondaryBg + '80',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        },
        tipIcon: {
            marginRight: wp(3),
        },
        tipText: {
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: hp(1.7),
            flex: 1,
            opacity: 0.9,
            lineHeight: hp(2.3),
        },
        footerContainer: {
            padding: wp(5),
            //   paddingBottom: Platform.OS === 'ios' ? hp(4) : hp(2),
        },
        button: {
            borderRadius: 12,
            paddingVertical: hp(1),
            width: wp(45),
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            overflow: 'hidden',
        },
        outlineButton: {
            borderColor: theme.colors.primary,
            borderWidth: 1,
            marginBottom: hp(1.5),
        },
        buttonFill: {
            backgroundColor: theme.colors.primary,
            marginBottom: hp(1.5),

        },
        buttonLabel: {
            color: theme.colors.primary,
            fontSize: hp(2),
            fontFamily: 'Outfit',
            fontWeight: '600',
        },
        buttonIcon: {
            marginRight: wp(2),
        },
        buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: hp(1.5),
        },
        whiteText: {
            color: '#FFFFFF',
        },
        backButton: {
            position: 'absolute',
            top: hp(1.5),
            left: wp(5),
            zIndex: 10,
        },
        uploadingOverlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.7)',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            borderRadius: hp(17.5),
        },
        uploadingText: {
            color: '#FFFFFF',
            fontFamily: 'Outfit',
            fontSize: hp(1.6),
            marginTop: hp(1),
        }
    })

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 0.8,
            aspect: [1, 1],
        })
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
            setSelected(true)
        }
    }

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
            alert('Sorry, we need camera permissions to make this work!')
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.8,
            aspect: [1, 1],
        })
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
            setSelected(true)
        }
    }

    const uploadProfile = async () => {
        setUploading(true)
        setTimeout(() => {
            setUploading(false)

            // API call to upload the image
            console.log(data, selectedImage)

            router.push('/details/success')
        }, 1500)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <View style={styles.headerContainer}>
                <View style={styles.progressContainer}>
                    <Text style={styles.progressText}>Step 3 of 3</Text>
                    <ProgressBar progress={1} color={theme.colors.primary} style={styles.progressBar} />
                </View>
                <Text style={styles.title}>Profile Image</Text>
                <Text style={styles.description}> Your profile image is the first thing people see. Choose a photo that clearly shows your face and represents you well.</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <View style={styles.imageWrapper}>
                        {selectedImage ? (
                            <>
                                <Image source={{ uri: selectedImage }} style={styles.image} />
                                <TouchableOpacity
                                    style={styles.editButtonContainer}
                                    onPress={pickImage}
                                    disabled={uploading}
                                >
                                    <Icon source={selected ? "pencil" : "plus"} size={24} color="#FFFFFF" />
                                </TouchableOpacity>
                            </>
                        ) : (
                            <ImageViewer
                                imgSource={PlaceholderImage}
                                selectedImage={selectedImage}
                                style={styles.image}
                            />
                        )}
                        {uploading && (
                            <View style={styles.uploadingOverlay}>
                                <ActivityIndicator color={theme.colors.primary} size={30} />
                                <Text style={styles.uploadingText}>Uploading...</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                {selected ? (
                    <TouchableOpacity style={[styles.button, styles.buttonFill, {width: 'auto', height: hp(7)}]} onPress={uploadProfile} disabled={uploading} >
                        <Text style={[styles.buttonLabel, styles.whiteText]}>{uploading ? 'Uploading...' : 'Continue'}</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: wp(2) }}>
                        <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={takePhoto}
                        >
                            <View style={styles.buttonContent}>
                                <Icon source="camera" size={20} color={theme.colors.primary} style={styles.buttonIcon} />
                                <Text style={styles.buttonLabel}>Take Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonFill]} onPress={pickImage} >
                            <Icon source="image" size={20} color="#FFFFFF" style={styles.buttonIcon} />
                            <Text style={[styles.buttonLabel, styles.whiteText]}>Choose Photo</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.tipContainer}>
                <Icon source="lightbulb-outline" size={24} color={theme.colors.primary} style={styles.tipIcon} />
                <Text style={styles.tipText}>
                    For best results, use a well-lit photo where your face is clearly visible. Avoid group photos or heavily filtered images.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default profile_image;