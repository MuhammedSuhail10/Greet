import { View, Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { isDarkMode } from '../helpers/common';
import { useTheme } from '../constants/theme';
import { Redirect, useRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Loader from './../components/Loader';

const Index = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    bg: {
      backgroundColor: theme.colors.primaryBg,
      flex: 1,
    },
  });
  
  const dark = isDarkMode();
  const router = useRouter();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      // router.replace('/home');
      router.replace('/landing/landing_1');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
      <PaperProvider>
        <SafeAreaView style={styles.bg}>
          <StatusBar style={dark ? 'light' : 'dark'} />
          <Loader />
        </SafeAreaView>
      </PaperProvider>
  );
};

export default Index;