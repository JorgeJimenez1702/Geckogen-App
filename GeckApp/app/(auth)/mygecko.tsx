import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import MyGeckoComponent from "../(mygeckoScreens)/myGeckoComponent";

interface geckosInterface {
  userId: string,
  name: string;
  specimen: string;
  weight: string;
  sex: string;
  dateObject: string;
}

const MyGecko = () => {

  const { user } = useUser();
  const [geckos, setGeckos] = useState<geckosInterface[]>();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getGeckos = async () => {
      try {
        const response = await fetch(
          `https://api-jtnmag5rtq-uc.a.run.app/api/mygeckos/${user?.id}`
        );
        if (response.ok) {
          const result = await response.json();
          setGeckos(result);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch geckos");
        }
      } catch (error) {
        console.error("Error fetching geckos:", error);
      }
    };
    getGeckos();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {geckos && geckos.length > 0 && !isLoading ? (
          geckos?.map((geckos, idx) => {
            return (
              <View key={idx}>
                <MyGeckoComponent geckosInterface={geckos}></MyGeckoComponent>
              </View>
            );
          })
        ) : (
          <View>
            <Text>Oh, looks like you don't have any gecko!</Text>
            <Text>Click here to add a new one</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    contentContainerStyle: "center",
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
