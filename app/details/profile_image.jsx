import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../constants/theme';
import { hp, isDarkMode, wp } from '../../helpers/common';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ImageViewer from '../../components/ImageViewer';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

const profile_image = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const [loaded, error] = useFonts({
        'Outfit': require('../../assets/fonts/Outfit.ttf'),
        'Poppins': require('../../assets/fonts/Poppins.ttf'),
    });
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
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
        description: {
            paddingInline: 20,
            color: theme.colors.text,
            fontFamily: 'Outfit',
            fontSize: hp(1.8),
            marginBlock: 5,
        },
        button: {
            borderRadius: 10,
            padding: hp(2),
            width: wp(80),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: theme.colors.primary,
            borderWidth: 1,
            marginTop: hp(5),
        },
        buttonLabel: {
            color: theme.colors.primary,
            fontSize: 20,
            fontFamily: 'Poppins',
        },
        image: {
            width: hp(35),
            height: hp(35),
            borderRadius: theme.borderRadius.full,
            marginTop: 30,
        },
        imageContainer: {
            marginTop: 1,
            alignSelf: 'center'
        },
        footerContainer: {
            display: 'flex',
            padding: 15,
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        halfWidth: { width: wp(42.5) },
    })

    const [selected, useSelect] = useState(false);
    const [selectedImage, setSelectedImage] = useState(undefined);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
            aspect: [1, 1],
        });

        if (!result.canceled) {
            console.log(result);
            setSelectedImage(result.assets[0].uri);
            useSelect(true);
        }
    };

    const PlaceholderImage = 'https://imgs.search.brave.com/awksT_Zoh8G9Qn5d-CbZP4gAPcl0EDxLP0J88fgAnB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/ODA1MTU2L3ZlY3Rv/ci9wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2t2TERDZ3NI/SC04SGVRZTdKc2po/bE9ZNnZSQkprX3NL/VzlseWFMZ21Mbz0';

    const uploadProfile = async () => {
        router.push('/details/success')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <Text style={styles.title}>Profile Image</Text>
            <Text style={styles.description}>Your profile image helps other users recognize you. Choose a clear photo that best represents you.</Text>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} style={styles.image} />
            </View>
            {selected ? <View style={styles.footerContainer}>
                <Pressable style={[styles.button, styles.halfWidth]} onPress={() => pickImage()}>
                    <Text style={styles.buttonLabel}> 🖼️ Change</Text>
                </Pressable>
                <Pressable onPress={() => uploadProfile()} style={{ ...styles.button, ...styles.halfWidth, backgroundColor: theme.colors.primary }} >
                    <Text style={{ ...styles.buttonLabel, color: theme.colors.text }}>Next ➜</Text>
                </Pressable>
            </View> :
                <Pressable style={[styles.button, { alignSelf: 'center', backgroundColor: theme.colors.primary }]} onPress={() => pickImage()}>
                    <Text style={{ ...styles.buttonLabel, color: theme.colors.text }}> 📸 Upload a photo</Text>
                </Pressable>}
        </SafeAreaView>
    )
}

export default profile_image