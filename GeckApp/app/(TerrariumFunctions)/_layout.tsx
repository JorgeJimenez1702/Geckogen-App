import React from 'react';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const BackButton = () => {

    return (
        <Link href={"/(auth)/terrarium"} asChild>
            <Pressable style={{ marginRight: 15 }}>
                <Ionicons name="chevron-back" size={28} color={'#0076E4'} />
            </Pressable>
        </Link>
    );
};

const TerrariumLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#FFF',
                },
                headerTintColor: '#000',

            }}>
            <Stack.Screen
                name="TerrariumInterface"
                options={{
                    headerTitle: 'Terrarium',
                    headerLeft: () => <BackButton/>
                }}
            />
            <Stack.Screen
                name="AddTerrarium"
                options={{
                    headerTitle: 'Terrarium',
                    headerLeft: () => <BackButton/>
                }}></Stack.Screen>
        </Stack>
    );
};

export default TerrariumLayout;