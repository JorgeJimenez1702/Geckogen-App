import { View, StyleSheet, ScrollView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import TerrariumComponent from '../(TerrariumFunctions)/TerrariumComponent';

interface itemInterface {
  id: string,
  Name: string,
  Humidity: string,
  Light_Cycle: string,
  Oxigenation: string,
  Temperature: string
}

const terrarium = () => {
  const [terrariums, setTerrariums] = useState<itemInterface[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTerrariums = async () => {
      try {
        const response = await fetch('https://api-jtnmag5rtq-uc.a.run.app/api/terrariums');
        if (response.ok) {
          const result = await response.json();
          setTerrariums(result);
          setIsLoading(false);
        } else {
          console.error('Failed to fetch terrariums');
        }
      } catch (error) {
        console.error('Error fetching terrariums:', error);
      }
    };
    getTerrariums();
  }, []);

  return (
    <ScrollView style={styles.container}>

      {terrariums && !isLoading ? (

        terrariums.map((terrariums, idx) => {
          return (
            <View key={idx}>
              <TerrariumComponent params={terrariums}></TerrariumComponent>
            </View>
          )
        })

      ) : (
        <View>
            <Text>Oh, looks like you don't have any terrarium!</Text>
            <Text>Click here to add a new one</Text>
          </View>
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
});

export default terrarium;