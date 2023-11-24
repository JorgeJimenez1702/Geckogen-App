import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Link href="/initialpage" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Get Started!</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingTop: 60,
    },
    button: {
        marginTop: 650,
        backgroundColor: '#0076E4',
        borderRadius: 15,
        width: 350,
        height: 50,
        justifyContent: 'center'
    },
    text: {
        color: '#D9D9D9',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "700",
    }
});

export default Welcome;