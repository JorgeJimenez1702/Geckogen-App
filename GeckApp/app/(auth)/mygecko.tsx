import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { GeckoSearchParams } from '../(mygeckoScreens)/types'; 

const MyGecko: React.FC = () => {
  const params = useLocalSearchParams<GeckoSearchParams>();
  const router = useRouter();
  const [geckoNames, setGeckoNames] = useState<string[]>([]);

  useEffect(() => {
    if (params.geckoName) {
      setGeckoNames((prevNames: string[]) => [
        ...prevNames,
        ...(params.geckoName ? [params.geckoName] : []),
      ]);
    }
  }, [params.geckoName]);

  const handleLinkPress = () => {
    const newGeckoName = 'geckoname';

    router.push({
      pathname: '/(mygeckoScreens)/geckoForm',
      params: {
        geckoName: newGeckoName,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLinkPress} style={styles.touchable}>
        <Link href="/(mygeckoScreens)/geckoForm">
          <Ionicons name="add-circle-outline" size={34} color="#0076E4" />
        </Link>
      </TouchableOpacity>

      {geckoNames.map((name, index) => (
        <View key={index} style={styles.geckoBox}>
          <Text>{name}</Text>
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: "#fff"
  },
  touchable: {
    padding: 10,
  },
  geckoBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
});
export default MyGecko;

