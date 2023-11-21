import { View, StyleSheet, Text } from 'react-native';
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
        const response = await fetch('https://e688-187-137-2-145.ngrok-free.app/geckogen-a0538/us-central1/app/api/terrariums');
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
    <View style={styles.container}>

      {terrariums && !isLoading ? (

        terrariums.map((terrariums, idx) => {
          return (
            <View key={idx}>
              <TerrariumComponent params={terrariums}></TerrariumComponent>
            </View>
          )
        })

      ) : (
        <Spinner visible={isLoading} />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
});

export default terrarium;