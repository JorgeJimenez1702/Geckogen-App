import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GeckoForm from './geckoForm';

import { useNavigation } from '@react-navigation/native';

const Mygecko = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('GeckoForm')}
      />
    </View>
  );
};

export default Mygecko;
const HomeStack = createNativeStackNavigator();

function geckoStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="mygecko" component={Mygecko} />
      <HomeStack.Screen name="geckoForm" component={GeckoForm} />
    </HomeStack.Navigator>
  );
}

