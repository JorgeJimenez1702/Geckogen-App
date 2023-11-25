import React from 'react';
import { Link, Stack } from 'expo-router';

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="welcome"
        options={{
          headerTitle: 'Welcome To Geckogen',
          headerTransparent: true,
          headerBlurEffect: 'extraLight',
        }}></Stack.Screen>
      <Stack.Screen
        name="initialpage"
        options={{
          headerTitle:'',
          headerTintColor: '#000000',
          headerLargeStyle: {backgroundColor: '#FFF'},
          presentation: 'modal',
        }}></Stack.Screen>
      <Stack.Screen
        name="login"
        options={{
          headerTitle: 'Log In',
          headerTintColor: '#000000',
          headerLargeStyle: {backgroundColor: '#FFF'},
          presentation: 'containedModal',
        }}></Stack.Screen>
      <Stack.Screen
        name="register"
        options={{
          headerTitle: 'Sign Up',
          headerTintColor: '#000000',
          headerLargeStyle: {backgroundColor: '#FFF'},
          presentation: 'containedModal',
        }}></Stack.Screen>
      <Stack.Screen
        name="reset"
        options={{
          headerTitle: 'Reset Password',
          headerTintColor: '#000000',
          headerLargeStyle: {backgroundColor: '#FFF'},
          presentation: 'modal',
        }}></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;