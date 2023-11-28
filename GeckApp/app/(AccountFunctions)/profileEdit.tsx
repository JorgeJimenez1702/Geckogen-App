import { ScrollView, Text, Button, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-expo';

interface userInfoType {
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    address: string
}

const Account = () => {
    const { user } = useUser();
    const [userInfo, setUserInfo] = useState<userInfoType>();
    
    const [firstName, setFirstName] = useState(user?.firstName as string);
    const [lastName, setLastName] = useState(user?.lastName as string);
    const [emailAddress, setEmailAddress] = useState(user?.primaryEmailAddress?.emailAddress as string);
    
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');
    
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await fetch(`https://api-jtnmag5rtq-uc.a.run.app/api/users/${user?.id}`);

                if (response.ok) {
                    const result = await response.json();
                    setUserInfo(result);
                    //console.log(userInfo);
                } else {
                    console.error('Failed to fetch terrariums');
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }
        getUserInfo();
    }, []);

    useEffect(() => {
        setPhoneNumber(userInfo?.phoneNumber as string);
        setCountry(userInfo?.country as string);
        setState(userInfo?.state as string);
        setCity(userInfo?.city as string);
        setZipcode(userInfo?.zipcode as string);
        setAddress(userInfo?.address as string);
    }, [userInfo]);

    const putUser = async (userInfo: userInfoType) => {
        try {
            const response = await fetch(`https://api-jtnmag5rtq-uc.a.run.app/api/users/${user?.id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(userInfo)
            });

            const result = await user?.update({
                firstName: firstName!,
                lastName: lastName!,
            });

            if (response.ok) {
                console.log('User Updated Successfully');
                Alert.alert(
                    'Update', 'User has been updated successfully',
                    [{
                        text: 'OK',
                        onPress: () => console.log(''),
                    },]
                )
            } else {
                console.error('Failed to fetch users');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };



    return (
        <ScrollView style={styles.container}>
            <Text>Name</Text>
            <TextInput placeholder="First Name" value={firstName || ''} onChangeText={setFirstName} style={styles.inputField} />

            <Text>Last Name</Text>
            <TextInput placeholder="Last Name" value={lastName || ''} onChangeText={setLastName} style={styles.inputField} />

            <Text>Email</Text>
            <TextInput placeholder="Email" editable={false} value={emailAddress || ''} style={styles.inputField} />

            <Text>Phone Number</Text>
            <TextInput placeholder="Enter your phone number" placeholderTextColor={'#000'} value={phoneNumber || ''} onChangeText={setPhoneNumber} style={styles.inputField} />

            <Text>Country</Text>
            <TextInput placeholder="Select your country address" placeholderTextColor={'#000'} value={country || ''} onChangeText={setCountry} style={styles.inputField} />

            <Text>State</Text>
            <TextInput placeholder="Select your state address" placeholderTextColor={'#000'} value={state || ''} onChangeText={setState} style={styles.inputField} />

            <Text>City</Text>
            <TextInput placeholder="Enter your city address" placeholderTextColor={'#000'} value={city || ''} onChangeText={setCity} style={styles.inputField} />

            <Text>Zip code</Text>
            <TextInput placeholder="Enter your zip code" placeholderTextColor={'#000'} value={zipcode || ''} onChangeText={setZipcode} style={styles.inputField} />

            <Text>Address</Text>
            <TextInput placeholder="Enter your city address" placeholderTextColor={'#000'} value={address || ''} onChangeText={setAddress} style={styles.inputField} />

            <TouchableOpacity onPress={() => putUser({
                firstName,
                lastName,
                emailAddress,
                phoneNumber,
                country,
                state,
                city,
                zipcode,
                address
            })} style={styles.button}>
                <Text style={styles.buttonText}>
                    Confirm
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        contentContainerStyle: 'flex-start',
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
        marginTop: 26,
        marginBottom: 116,
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