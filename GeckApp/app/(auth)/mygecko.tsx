import { View, Text } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

const mygecko = () => {
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ANDO PROBANDO QUE ME SALGA ALGO EN ESTA PANTALLLA</Text>
    </View>
  );
};

export default mygecko;