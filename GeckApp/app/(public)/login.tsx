import { useSignIn } from '@clerk/clerk-expo';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, TouchableOpacity, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const image = { uri: 'https://s3-alpha-sig.figma.com/img/1b4b/8e53/2b0223e335f3e9331905cd6b084fc64f?Expires=1701648000&Signature=lvYbW2bbqT1Q6A1~K40w8VULaUE~38bBbL-oXpSbynSyvUt3Inwi5bLbFu7Ur6F2vCkMj~c4p1vc6UPrpyGHAsmjiWiGBwHg08Gq9HJEWhpYawu~Ndmcj9fYm0CL9bb3u3lUgA5LaVsIIdXwPY~I0RApuz7vyJMh7FkYb-p53FMUy~2NEhJASFKL6n1P6fLRQqKJM1nEbsg6faOb1oO0bM3qCqSXjV2ko7UicW4LjbGNkZ8nE5u3gQCFCnyJxu376GpvNh2v2-mFAmRudLhfgQCTIX559hfTZHNgHqWFIJwjRuEbOmomVV44zaXi3guA-hVn7RQeTiHhnW3kgigkdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }

const Login = () => {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const isPresented = router.canGoBack();

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
            <Image
                style={styles.Image}
                source={image}
            />
            <View style={styles.formsContainer}>

                <Text style={styles.formsText}>Email</Text>
                <TextInput autoCapitalize="none" placeholder="Enter your email" placeholderTextColor={'#D0D0D0'} value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />


                <Text style={styles.formsText}>Password</Text>
                <TextInput placeholder="Enter your password" placeholderTextColor={'#D0D0D0'} value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />


                <Link href="/(public)/reset" asChild>
                    <TouchableOpacity style={styles.secondarybuttons}>
                        <Text>Forgot password?</Text>
                    </TouchableOpacity>
                </Link>


            </View>

            <View style={styles.buttonsContainer}>


                <TouchableOpacity style={styles.button} onPress={onSignInPress}>
                    <Text style={styles.loginButton}>Log in</Text>
                </TouchableOpacity>

                <Link href="/register" asChild>
                    <TouchableOpacity style={styles.secondarybuttons}>
                        <Text>Don't have an account? <Text style={styles.registerLetters}>Sign Up</Text></Text>
                    </TouchableOpacity>
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
        width: 350,
        height: 50,
        justifyContent: 'center',
    },
    loginButton: {
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
    Image: {
        width: 198,
        height: 108,
        flexShrink: 0,
        alignSelf: 'center',
        marginVertical: 85,
    },
});

export default Login;