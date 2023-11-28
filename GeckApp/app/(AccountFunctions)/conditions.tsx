import { ScrollView, Text, StyleSheet } from 'react-native';

const conditions = () => {
    return (
        <ScrollView style={styles.container}>
            <Text>Terms & Conditions</Text>
            <Text>Last Updated Nov 20, 2023</Text>

            
            <Text>
                Welcome to Geckogen, developed by [Company Name]. By using our application, you agree to the following terms and conditions:
            </Text>

            <Text>Personal Information</Text>
            <Text>
                The application collects generic information such as Name, Email, Phone Number, Address, solely for the purpose of providing and improving our services.
            </Text>

            <Text>Use of Information</Text>
            <Text>
                The collected information is used to personalize your experience, facilitate access to specific services, and communicate with you about updates and news related to the application.
            </Text>

            <Text>Privacy and Security</Text>
            <Text>
                We are committed to protecting your privacy and taking measures to safeguard the collected information. Please refer to our Privacy Policy for more details.
            </Text>

            <Text>Access and Control</Text>
            <Text>
                You can access and correct your personal data from the application settings. Additionally, you have the right to request the deletion of your information.
            </Text>

            <Text>Cookies and Similar Technologies</Text>
            <Text>
                We use cookies and similar technologies to enhance functionality and the user experience. Refer to our Cookie Policy for detailed information.
            </Text>

            <Text> Intellectual Property</Text>
            <Text>
                The application and all its content are the property of [Company Name]. You do not have the right to reproduce, distribute, or modify any content without our permission.
            </Text>

            <Text>Changes to the Terms</Text>
            <Text>
                We reserve the right to modify these terms at any time. Updates will be posted within the application, and continued use constitutes acceptance of the changes.
            </Text>

            <Text>Limitation of Liability</Text>
            <Text>
                The application is provided "as is," and we are not responsible for any direct or indirect damage arising from its use.

                If you have questions or concerns, contact us through support@geckogen.com
                By using Geckogen, you agree to these terms and conditions. Thank you for choosing us!
            </Text>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignContent: 'flex-start',
        paddingHorizontal: 30,
    },
})

export default conditions;