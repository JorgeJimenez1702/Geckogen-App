import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';

const Account = () => {
    const { user } = useUser();
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [emailAddress, setEmailAddress] = useState(user?.primaryEmailAddress);
    const [phoneNumber, setPhoneNumber] = useState(user?.primaryPhoneNumber);
    
    const [primaryEmailAddress, setPrimaryEmailAddress] = useState('');
    const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState('');

    const onSaveUser = async () => {
        try {
            const result = await user?.update({
                firstName: firstName!,
                lastName: lastName!,
            });

            console.log(result);
        } catch (e) {
            console.log('~ file: profile.tsx:18 ~ onSaveUser ~ e', JSON.stringify(e));
        }
    };

    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput placeholder="First Name" value={firstName || ''} onChangeText={setFirstName} style={styles.inputField} />
            
            <Text>Last Name</Text>
            <TextInput placeholder="Last Name" value={lastName || ''} onChangeText={setLastName} style={styles.inputField} />
            
            <Text>Email</Text>
            <TextInput placeholder="Email" value={emailAddress?.emailAddress || ''} onChangeText={setPrimaryEmailAddress} style={styles.inputField} />
            
            <Text>Phone Number</Text>
            <TextInput placeholder="Enter your phone number" placeholderTextColor={'#D0D0D0'} value={phoneNumber?.phoneNumber || ''} onChangeText={setPrimaryPhoneNumber} style={styles.inputField} />
            
            
            <TouchableOpacity onPress={onSaveUser} style={styles.button}>
                <Text style={styles.buttonText}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        padding: 40,
    },
    inputField: {
        marginVertical: 15,
        height: 50,
        borderWidth: 1,
        borderColor: '#0076E4',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
    button: {
        marginTop: 200,
        backgroundColor: '#0076E4',
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#D9D9D9',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "700",
    },
});

export default Account;