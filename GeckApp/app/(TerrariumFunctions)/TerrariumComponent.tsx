import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';


const TerrariumComponent = ( object: {params: {
    id: string,
    Name: string,
    Humidity: string,
    Light_Cycle: string,
    Oxigenation: string,
    Temperature: string
}}) => {
    const name = object.params.Name;

    return (
        <View>
            <Link
                href={{
                    pathname: "/(TerrariumFunctions)/TerrariumInterface",
                    params: object.params,
                }} asChild>

                <TouchableOpacity style={styles.moduleBox}>
                    <Text style={styles.moduleText}>{name}</Text>

                </TouchableOpacity>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    moduleBox: {
        width: 330,
        height: 84,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        marginVertical: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1
    },
    moduleText: {
        marginTop: 26,
        marginLeft: 26,
        width: 125,
        height: 40,
        color: '#000',
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '700',
    },
});

export default TerrariumComponent;