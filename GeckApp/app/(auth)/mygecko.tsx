import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mygecko = () => {
  const navigation = useNavigation<any>();

  const handleAddButtonPress = () => {
    navigation.navigate('geckoForm');
  };

  return (
    <View>
      <Button title="Add Item" onPress={handleAddButtonPress} />
    </View>
  );
};

export default Mygecko;


