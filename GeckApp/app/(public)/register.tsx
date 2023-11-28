import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import Spinner from 'react-native-loading-spinner-overlay';
import { useState } from 'react';
import { Stack } from 'expo-router';

const Register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {

      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });


      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />

      {!pendingVerification && (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
            <TextInput autoCapitalize="none" placeholder="Enter your name" placeholderTextColor={'#D0D0D0'} value={firstName} onChangeText={setFirstName} style={styles.inputField} />
            <Text style={styles.text}>Last Name</Text>
            <TextInput autoCapitalize="none" placeholder="Enter your last name" placeholderTextColor={'#D0D0D0'} value={lastName} onChangeText={setLastName} style={styles.inputField} />
            <Text style={styles.text}>Email</Text>
            <TextInput autoCapitalize="none" placeholder="Enter your Email" placeholderTextColor={'#D0D0D0'} value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />
            <Text style={styles.text}>Password</Text>
            <TextInput placeholder="Enter your password" placeholderTextColor={'#D0D0D0'} value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onSignUpPress} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {pendingVerification && (
        <>
          <View>
            <TextInput value={code} placeholder="Code..." style={styles.inputField} onChangeText={setCode} />
          </View>
          <Button onPress={onPressVerify} title="Verify Email" color={'#6c47ff'}></Button>
        </>
      )}
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



  inputContainer: {
    paddingTop: 62
  },
  inputField: {
    marginVertical: 5,
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
    padding: 15,
  },

  

  buttonContainer: {
    paddingTop: 210,
  },
  button: {
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

  text: {
    paddingVertical: 5,
    color: '#000',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24
  },
});

export default Register;