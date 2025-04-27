import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import { Link, router, useRouter } from 'expo-router';
import { useTheme } from '../../constants/theme';
import { hp, isDarkMode, wp } from '../../helpers/common';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../../assets/icons';
import { createTwoButtonAlert } from './../../helpers/alert';

const login = ({ navigation }) => {
  const dark = isDarkMode();
  const theme = useTheme();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [enable, setEnabled] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primaryBg,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 30,
      padding: 10
    },
    title: {
      color: theme.colors.text,
      fontSize: hp(4),
      fontFamily: 'Poppins',
      fontWeight: 700,
      textAlign: 'center',
      marginTop: 10
    },
    inputContainer: {
      height: hp(9),
      margin: 30,
      backgroundColor: theme.colors.secondaryBg,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      gap: 10
    },
    input: {
      borderRadius: 10,
      marginBottom: 15,
      fontSize: 25,
      fontFamily: 'Poppins',
      // borderColor: theme.colors.text,
      borderWidth: 0,
    },
    // iconContainer: {
    //   padding: 30,
    //   backgroundColor: '#EFF6FF',
    //   borderRadius: 50,
    //   marginBottom: 24,
    // },
    countryCode: {
      fontSize: 20,
      fontWeight: '500',
      color: theme.colors.text,
    },
    separator: {
      fontSize: 20,
      color: '#D1D5DB',
      marginHorizontal: 12,
    },
    input: {
      flex: 1,
      fontSize: 18,
      color: theme.colors.text,
      padding: 0,
    },
    buttonDisabled: {
      backgroundColor: theme.colors.secondaryBg,
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
  });

  const handlePhoneChange = (value) => {
    setError("");
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length <= 10) {
      setPhone(numericValue)
      if (numericValue.length < 10 && enable) setEnabled(false);
    };
    if (numericValue.length == 10) { setEnabled(true); Keyboard.dismiss(); }
  };

  const handlelogin = async () => {
    if (!phone) { const alert = createTwoButtonAlert("Login Error", "Phone number is required", "OK"); console.log("first"); return; }
    if (phone.length < 10) { setError("Phone number should be 10 digits"); return; }

    router.push({
      pathname: "/auth/otp",
      query: { phone: phone } // Pass phone number as query parameter if needed
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Icon name="phone" size="75" strokeWidth="1" />
          </View>
          <Text style={styles.title}>Enter your phone number</Text>
          <View style={[styles.inputContainer, error && { borderWidth: 0, borderColor: theme.colors.primary }]}>
            <Text style={styles.countryCode}>+91</Text>
            <Text style={styles.separator}>|</Text>
            <TextInput
              style={[styles.input,]}
              value={phone}
              onChangeText={handlePhoneChange}
              keyboardType="number-pad"
              placeholder=""
              maxLength={10}
            />
          </View>
          <TouchableOpacity onPress={() => handlelogin()} style={[styles.button, !enable && styles.buttonDisabled]} disabled={!enable}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};

export default login