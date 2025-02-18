import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handlesignup = () => {
        // Implement signup logic
        console.log('signup attempted with:', formData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Create Account</Text>
                    <Text style={styles.headerSubtitle}>Sign up to get started</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={formData.username}
                        onChangeText={(text) => setFormData({...formData, username: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={formData.email}
                        onChangeText={(text) => setFormData({...formData, email: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(text) => setFormData({...formData, password: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry
                        value={formData.confirmPassword}
                        onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
                    />

                    <TouchableOpacity 
                        style={styles.signupButton}
                        onPress={handlesignup}
                    >
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginLinkContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => {/* Navigate to login */}}>
                        <Text style={styles.loginLinkText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20
    },
    header: {
        alignItems: 'center',
        marginBottom: 30
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 10
    },
    inputContainer: {
        width: '100%'
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16
    },
    signupButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },
    signupButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    loginLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    loginText: {
        color: '#666'
    },
    loginLinkText: {
        color: '#007bff',
        fontWeight: 'bold'
    }
});

export default signup;