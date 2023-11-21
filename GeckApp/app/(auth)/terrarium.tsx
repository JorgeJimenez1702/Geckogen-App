import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

interface itemInterface {
  id: string,
  name: string,
  humidity: string,
  light_Cycle: string,
  oxigenation: string,
  temperature: string
}

const terrarium = () => {
  const [terrariums, setTerrariums] = useState<itemInterface[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTerrariums = async () => {
      try {
        const response = await fetch('https://3421-187-137-2-145.ngrok-free.app/geckogen-a0538/us-central1/app/api/terrariums');
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
          <View style={styles.moduleBox} key={idx}>
            <Link href="/(TerrariumFunctions)/TerrariumInterface" asChild>
              <TouchableOpacity style={styles.moduleTextContainer}>
                <Text style={styles.moduleText}>{terrariums.name}</Text>
              </TouchableOpacity>
            </Link>
          </View>
          );
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
  moduleBox: {
    width: 341,
    height: 193,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1
  },
  moduleTextContainer: {
    marginTop: 142,
    marginLeft: 25,
  },
  moduleText: {
    color: '#000',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default terrarium;