import { ScrollView, Text, StyleSheet } from 'react-native';

const conditions = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <Text style={styles.lastUpdate}>Last Updated Nov 20, 2023</Text>


            <Text style={styles.text}>
                Welcome to Geckogen, developed by [Company Name]. By using our application, you agree to the following terms and conditions:
            </Text>

            <Text style={styles.subtitle}>Personal Information</Text>
            <Text style={styles.text}>
                The application collects generic information such as Name, Email, Phone Number, Address, solely for the purpose of providing and improving our services.
            </Text>

            <Text style={styles.subtitle}>Use of Information</Text>
            <Text style={styles.text}>
                The collected information is used to personalize your experience, facilitate access to specific services, and communicate with you about updates and news related to the application.
            </Text>

            <Text style={styles.subtitle}>Privacy and Security</Text>
            <Text style={styles.text}>
                We are committed to protecting your privacy and taking measures to safeguard the collected information. Please refer to our Privacy Policy for more details.
            </Text>

            <Text style={styles.subtitle}>Access and Control</Text>
            <Text style={styles.text}>
                You can access and correct your personal data from the application settings. Additionally, you have the right to request the deletion of your information.
            </Text>

            <Text style={styles.subtitle}>Cookies and Similar Technologies</Text>
            <Text style={styles.text}>
                We use cookies and similar technologies to enhance functionality and the user experience. Refer to our Cookie Policy for detailed information.
            </Text>

            <Text style={styles.subtitle}> Intellectual Property</Text>
            <Text style={styles.text}>
                The application and all its content are the property of [Company Name]. You do not have the right to reproduce, distribute, or modify any content without our permission.
            </Text>

            <Text style={styles.subtitle}>Changes to the Terms</Text>
            <Text style={styles.text}>
                We reserve the right to modify these terms at any time. Updates will be posted within the application, and continued use constitutes acceptance of the changes.
            </Text>

            <Text style={styles.subtitle}>Limitation of Liability</Text>
            <Text style={styles.text}>
                The application is provided "as is," and we are not responsible for any direct or indirect damage arising from its use.
            </Text>
            <Text> </Text>
            <Text style={styles.endText}>
                If you have questions or concerns, contact us through support@geckogen.com
                By using Geckogen, you agree to these terms and conditions. Thank you for choosing us!
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
    endText: {
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

export default conditions;