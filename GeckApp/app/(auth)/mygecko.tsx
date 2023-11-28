import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { GeckoSearchParams } from "../(mygeckoScreens)/types";
import Spinner from 'react-native-loading-spinner-overlay';
import MyGeckoComponent from "../(mygeckoScreens)/myGeckoComponent";


interface geckosInterface {
  Name: string,
}

const MyGecko = () => {
  /*
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
    const newGeckoName = "geckoname";

    router.push({
      pathname: "/(mygeckoScreens)/geckoForm",
      params: {
        geckoName: newGeckoName,
      },
    });
  };
  */
  const [geckos, setGeckos] = useState<geckosInterface[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGeckos = async () => {
      try {
        const response = await fetch('https://06ac-187-137-2-145.ngrok-free.app/geckogen-a0538/us-central1/app/api/terrariums');
        if (response.ok) {
          const result = await response.json();
          setGeckos(result);
          setIsLoading(false);
        } else {
          console.error('Failed to fetch terrariums');
        }
      } catch (error) {
        console.error('Error fetching terrariums:', error);
      }
    };
    getGeckos();
  }, []);
  
  return (
    <View style={styles.container}>
      <Link href="./(mygeckoScreens)/geckoForm" asChild>
        <TouchableOpacity style={styles.touchable}>
          <Ionicons name="add-circle-outline" size={34} color="#0076E4" />
        </TouchableOpacity>
      </Link>

      {geckos && !isLoading ? (
        geckos.map((geckos, idx) => {
          return (
            <View key={idx}>
              <MyGeckoComponent Name={geckos.Name}></MyGeckoComponent>
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
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#fff",
  },
  touchable: {
    padding: 10,
  },
  geckoBox: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
});
export default MyGecko;