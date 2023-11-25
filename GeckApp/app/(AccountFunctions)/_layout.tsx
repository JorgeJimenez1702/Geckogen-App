import React from 'react';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export const BackButton = () => {
    return (
        <Link href={"/(auth)/account"} asChild>
            <Pressable style={{ marginRight: 15 }}>
                <Ionicons name="chevron-back" size={28} color={'#0076E4'} />
            </Pressable>
        </Link>
    );
};

const AccountLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFF',
                },
                headerTintColor: '#000',
            }}>
            <Stack.Screen
                name="profileEdit"
                options={{
                    headerTitle: 'Profile information',
                    headerLeft: () => <BackButton />
                }} />
            <Stack.Screen
                name="reset"
                options={{
                    headerTitle: 'Change Password',
                    headerLeft: () => <BackButton />
                }} />
            <Stack.Screen
                name="conditions"
                options={{
                    presentation: 'modal',
                    headerTitle: 'Terms & Conditions',
                    headerLeft: () => <BackButton />
                }} />
            <Stack.Screen
                name="policy"
                options={{
                    presentation: 'modal',
                    headerTitle: 'Privacy Policy',
                    headerLeft: () => <BackButton />
                }} />
        </Stack>
    );
};

export default AccountLayout;