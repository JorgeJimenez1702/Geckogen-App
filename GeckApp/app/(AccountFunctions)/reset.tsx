import { View, StyleSheet, TextInput, Button, Pressable, Text, } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { useSignIn } from '@clerk/clerk-expo';

const Reset = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const { signIn, setActive } = useSignIn();

  const onRequestReset = async () => {
    try {
      await signIn!.create({
        strategy: 'reset_password_email_code',
        identifier: emailAddress,
      });
      setSuccessfulCreation(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  const onReset = async () => {
    try {
      const result = await signIn!.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      });
      console.log(result);
      alert('Password reset successfully');

      await setActive!({ session: result.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />

      {!successfulCreation && (
        <>
          <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 200, }}>We're going to send you a code to your email address, this code will let you change your password to a new one</Text>
          <Text style={{ fontSize: 17, fontWeight: '700', marginBottom: 15, }}>Please insert your Email: </Text>
          <TextInput autoCapitalize="none" placeholder=" " value={emailAddress} onChangeText={setEmailAddress} style={styles.inputField} />

          <Pressable onPress={onRequestReset} style={styles.button}><Text style={styles.text}>Send Email Reset</Text></Pressable>
        </>
      )}

      {successfulCreation && (
        <>
          <View>
            <TextInput value={code} placeholder="Code..." style={styles.inputField} onChangeText={setCode} />
            <TextInput placeholder="New password" value={password} onChangeText={setPassword} secureTextEntry style={styles.inputField} />
          </View>
          <Button onPress={onReset} title="Set new Password" color={'#6c47ff'}></Button>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    padding: 40,
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
  button: {
    marginTop: 15,
    backgroundColor: '#0076E4',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: "700",
  },
});

export default Reset;