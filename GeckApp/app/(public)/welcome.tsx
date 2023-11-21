import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to Geckogen</Text>
            </View>

            <View>
                <Link href="/login" asChild>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            <View style={styles.signinContainer}>
                <Link href="/register" asChild>
                    <TouchableOpacity style={styles.signinButton}>
                        <Text style={styles.signinText}>Sign Up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
    },
    title: {
        color: '#000000',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 0,
        paddingBottom: 37,

    },
    loginButton: {
        backgroundColor: '#0076E4',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center'
    },
    loginText: {
        color: '#D9D9D9',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "700",
    },
    signinContainer: {
        paddingTop: 8,
    },
    signinButton: {
        borderWidth: 1,
        borderColor: '#D0D0D0',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center'
    },
    signinText: {
        color: '#010101',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "700",

    }
});

export default Welcome;