import React, { useState, useRef, useEffect, Children } from 'react';
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Icon from '../../assets/icons';
import { hp, isDarkMode, wp } from '../../helpers/common';
import { useTheme } from '../../constants/theme';
import { router, useLocalSearchParams } from 'expo-router';
import { sendOtp, verifyOtp } from '../../services/authService';
import SnackBar from '../../components/SnackBar';
import TokenService from '../../helpers/token';

const otp = () => {
    const dark = isDarkMode();
    const theme = useTheme();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef([]);
    const { phone } = useLocalSearchParams();
    const [snackVisible, setSnackVisible] = useState(false);
    const [snackKey, setSnackKey] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countdown);
    }, [timer]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
        },
        keyboardAvoid: {
            flex: 1,
        },
        content: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
        },
        title: {
            color: theme.colors.text,
            fontSize: hp(4),
            fontFamily: 'Poppins',
            fontWeight: 700,
            textAlign: 'center',
            marginTop: 10
        },
        subtitle: {
            fontSize: 16,
            color: theme.colors.LessOpacity,
            marginBottom: 32,
            textAlign: 'center',
            fontFamily: 'Poppins',
        },
        otpContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 32,
        },
        otpInput: {
            width: hp(7),
            height: hp(7),
            borderRadius: 12,
            backgroundColor: theme.colors.secondaryBg,
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
            color: theme.colors.primary,
        },
        otpInputFilled: {
            backgroundColor: theme.colors.secondaryBg,
            borderColor: theme.colors.primary,
            borderWidth: 1,
        },
        button: {
            backgroundColor: theme.colors.primary,
            borderRadius: 12,
            paddingVertical: 15,
            width: wp(72),
            maxWidth: 400,
            marginBottom: 15,
        },
        buttonDisabled: {
            backgroundColor: theme.colors.secondaryBg,
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
        },
        resendContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        resendText: {
            color: theme.colors.LessOpacity,
            fontSize: 14.5,
            fontFamily: 'Poppins',
        },
        timerText: {
            color: theme.colors.LessOpacity,
            fontSize: 14.5,
            fontWeight: '500',
            fontFamily: 'Poppins',
        },
        resendButton: {
            color: theme.colors.text,
            fontSize: 14.5,
            fontWeight: '500',
            fontFamily: 'Poppins',
        },
    });

    const handleOtpChange = (value, index) => {
        if (value.length <= 1) {
            if (isNaN(value)) return;
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 3) inputRefs.current[index + 1].focus();
        }
    };
    const isOtpComplete = otp.every(digit => digit !== '');
    const handleResendOtp = async () => {
        const status = await sendOtp({ phone });
        console.log("status: ", status)
        if (status != 200) {
            setSnackVisible(true);
            setSnackKey(Date.now());
            if (status == 511) setError('Check your internet connection and try again.');
            else if (status == 501) setError('Request timed out. Please try again.');
            else setError('Something went wrong. Please try again.');
            return;
        }
        setError("Otp generated succesfully.")
        setTimer(30);
    }

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') inputRefs.current[index - 1].focus();
    };

    const otpVerify = async () => {
        if (otp.length !== 4) return;
        const otpString = otp.join('');
        const { status, data } = await verifyOtp({ phone: phone, otp: otpString });
        console.log(status, data);
        if (![200, 201, 206].includes(status)) {
            setSnackVisible(true);
            setSnackKey(Date.now());
            if (status == 511) setError('Check your internet connection and try again.');
            else if (status == 501) setError('Request timed out. Please try again.');
            else setError(data?.message || "Something went wrong.");
            return;
        }
        if (data?.token) TokenService.saveTokens(data.token, data.refreshToken);
        if (status == 204) router.replace("/details/personal");
        if (status == 200) router.replace("/home");
        if (status == 201) router.replace("/home");
        if (status == 206) router.replace("/home");
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={dark ? 'light' : 'dark'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoid}
            >
                <View style={styles.content}>
                    <View style={styles.iconContainer}><Icon name="phone" size="80" strokeWidth="1" /></View>
                    <Text style={styles.title}>Otp verification</Text>
                    <Text style={styles.subtitle}>We've sent a verification code to {phone}</Text>
                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={ref => (inputRefs.current[index] = ref)}
                                style={[styles.otpInput, digit && styles.otpInputFilled]}
                                value={digit}
                                onChangeText={(value) => handleOtpChange(value, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                selectTextOnFocus
                            />
                        ))}
                    </View>
                    <TouchableOpacity onPress={() => otpVerify()} style={[styles.button, !isOtpComplete && styles.buttonDisabled]}
                        disabled={!isOtpComplete} >
                        <Text style={styles.buttonText}>Verify</Text>
                    </TouchableOpacity>
                    <View style={styles.resendContainer}>
                        <Text style={styles.resendText}>Didn't receive the code? </Text>
                        {timer > 0 ? (
                            <Text style={styles.timerText}>{`Resend in ${timer}s`}</Text>
                        ) : (
                            <TouchableOpacity onPress={handleResendOtp}>
                                <Text style={styles.resendButton}>Resend OTP</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </KeyboardAvoidingView>
            {snackVisible && <SnackBar key={snackKey} text={error} />}
        </SafeAreaView>
    );
};

export default otp;