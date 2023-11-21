import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }
        setLoading(true);
        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password,
            });

            await setActive({ session: completeSignIn.createdSessionId });
        } catch (err: any) {
            alert(err.errors[0].message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Spinner visible={loading} />
            <View style={styles.logoContainer}>
                <Text style={styles.logoLetters}>LOGO</Text>
            </View>

            <View style={styles.formsContainer}>

                <Text style={styles.formsText}>Email</Text>
                <TextInput autoCapitalize="none" placeholder="Enter your email" placeholderTextColor={'#D0D0D0'} value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />
                
                
                <Text style={styles.formsText}>Password</Text>
                <TextInput placeholder="Enter your password" placeholderTextColor={'#D0D0D0'} value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />
                
                
                <Link href="/reset" asChild>
                    <Pressable style={styles.secondarybuttons}>
                        <Text>Forgot password?</Text>
                    </Pressable>
                </Link>


            </View>

            <View style={styles.buttonsContainer}>
                
                <TouchableOpacity style={styles.button} onPress={onSignInPress}>
                    <Text style={styles.loginButton}>Log in</Text>
                </TouchableOpacity>
                
                <Link href="/register" asChild>
                    <Pressable style={styles.secondarybuttons}>
                        <Text>Don't have an account? <Text style={styles.registerLetters}>Sign Up</Text></Text>
                    </Pressable>
                </Link>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
    },

    
    logoContainer: {
        paddingBottom: 170,
        paddingTop: 100,
    },
    logoLetters: {
        color: '#000',
        fontSize: 40,
        fontWeight: '800',
        letterSpacing: -0.4,
        textAlign: 'center',
    },

    formsContainer: {
        justifyContent: 'flex-start'
    },
    formsText: {
        paddingVertical: 8,
        color: '#000',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24
    },
    inputField: {
        marginVertical: 4,
        height: 48,
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
    },

    buttonsContainer: {
        paddingTop: 125
        
    },
    button: {
        backgroundColor: '#0076E4',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
    },
    loginButton:{
        color: '#D9D9D9',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "700",
    },


    secondarybuttons: {
        margin: 8,
        textAlign: 'left'
    },
    registerLetters: {
        color: '#000',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 24,
    },
});

export default Login;