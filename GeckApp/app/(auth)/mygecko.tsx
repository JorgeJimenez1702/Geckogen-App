// MyGecko.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const MyGecko = () => {
  const navigation = useNavigation();

  const navigateToFormScreen = () => {
    navigation.navigate({
      routeName: 'geckoForm',
    });
  };

  return (
    <View>
      <Pressable onPress={navigateToFormScreen}>
        <Ionicons name="add-circle-outline" size={28} color="#0076E4" />
      </Pressable>
    </View>
  );
};

export default MyGecko;
