import { View, Text } from 'react-native';
import { useNavigation, useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';


const TerrariumInterface = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const {
    id,
    Name,
    Humidity,
    Light_Cycle,
    Oxigenation,
    Temperature
  } = params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {id},
      </Text>
      <Text>
        {Name},
      </Text>
      <Text>
        {Humidity},
      </Text>
      <Text>
        {Light_Cycle},
      </Text>
      <Text>
        {Oxigenation},
      </Text>
      <Text>
        {Temperature},
      </Text>
    </View>
  );
};

export default TerrariumInterface;