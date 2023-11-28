import { ScrollView, Text, StyleSheet } from 'react-native';

const policy = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Privacy policy</Text>
            <Text style={styles.lastUpdate}>Last Updated Nov 20, 2023</Text>

            <Text style={styles.text}>Welcome to Geckogen, developed by [Company Name]. We value and respect your privacy. This Privacy Policy outlines how we collect, use, and share personal information when you use our application.</Text>

            <Text style={styles.subtitle}>Information We Collect</Text>
            <Text style={styles.text}>Generic Data: Name, Email, Phone Number, Address.
                Device Information: Device type, operating system, unique device identifiers.
                Usage Data: Information about how you interact with the application.
            </Text>

            <Text style={styles.subtitle}>Use of Information</Text>
            <Text style={styles.text}>We use the collected information to provide and improve our services. Customize the user experience and provide relevant content. Communicate with you about updates, offers, and news related to the application.</Text>

            <Text style={styles.subtitle}>Sharing Information</Text>
            <Text style={styles.text}>We do not share your personal information with third parties without your consent, except when necessary to provide services or comply with legal requirements.</Text>

            <Text style={styles.subtitle}>Storage and Security</Text>
            <Text style={styles.text}>We take measures to protect your information against unauthorized access or disclosure.</Text>

            <Text style={styles.subtitle}>Cookies and Similar Technologies</Text>
            <Text style={styles.text}>We use cookies and similar technologies to enhance the user experience.</Text>

            <Text style={styles.subtitle}>Changes to the Privacy Policy</Text>
            <Text style={styles.text}>We reserve the right to modify this policy at any time. Updates will be posted within the application.</Text>

            <Text style={styles.subtitle}>Changes to the Privacy Policy</Text>
            <Text style={styles.text}>You can access, correct, or delete your personal information from the application settings.</Text>

            <Text style={styles.subtitle}>Consent</Text>
            <Text style={styles.text}>By using our application, you agree to the terms of this Privacy Policy</Text>
            <Text> </Text>
            <Text style={styles.text}>
                If you have questions about this policy, contact us at support@geckogen.com
            </Text>
            <Text style={styles.endText}>
                Thank you for trusting Geckogen. Your privacy is our priority..
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        contentContainerStyle: 'flex-start',
        padding: 40,
        backgroundColor: '#FFF',
    },
    title: {
        color: '#000',
        textAlign: 'left',
        fontSize: 24,
        fontWeight: '700',
    },
    lastUpdate: {
        color: '#898A8D',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 25,
    },
    text: {
        color: '#000',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 25,
    },
    endText:{
        color: '#000',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 25,
        marginBottom: 100
    },
    subtitle: {
        marginTop: 30,
        color: '#000',
        fontSize: 13,
        fontWeight: '700',
    },
});

export default policy;