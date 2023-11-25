import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { Link } from 'expo-router';

const image = { uri: 'https://s3-alpha-sig.figma.com/img/d64c/e417/a6ab7a6d0632a9974bf10c5ec22e4b9a?Expires=1701648000&Signature=bNc~VZIhflMSnQ3z6Y9k4DQye5gEZbJa62TnOzBdyIMRLB1Iaxi8zcAkmDmo2gsTDN~jn~IAVzlrlsIGpgBsiyPmPfO~Awu09Q6Y6ozU7xf-a9SVGdjMmlEkARbOInzxjACt-aHE9-5ClfPOSShFnh9j56X1yJsOhr9WhHtIObzX96uo8QNmkVAm91iWCBoZ08ncfJKDc-HANghmdHOS3GbIMyN7lBVtkjKeqD-DPmA8E6Q8UZfWNB9EOEZ9UdgLhELs-Z53V5VvecwQIwROzFByORQ2O4IbUe9banZbCeauAY8B2t0mVBa8CTBLBoE9-eXMTbUWnnrhO0ZbGHlpSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' }

const Welcome = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} imageStyle={{ opacity: 0.5 }}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.title}>
                        Home of the MONOCHROME
                    </Text>
                    <Text style={styles.subtitle}>
                        Make your gecko life experience better now
                    </Text>

                    <Link href="/initialpage" asChild>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Get Started!</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    button: {
        marginTop: 40,
        marginHorizontal: 30,
        backgroundColor: '#0076E4',
        borderRadius: 15,
        width: 350,
        height: 50,
        justifyContent: 'center',
    },
    text: {
        color: '#D9D9D9',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "700",
    },
    image: {
        resizeMode: 'stretch',
        width: 450,
        height: 1000,
    },
    title: {
        marginTop: 625,
        marginHorizontal: 30,
        color: '#FFF',
        fontSize: 34,
        fontWeight: '700',
    },
    subtitle: {
        marginHorizontal: 30,
        color: '#FFF',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 24
    }
});

export default Welcome;