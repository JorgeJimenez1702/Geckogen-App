import React, { useState, useEffect } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { GeckoSearchParams } from "../(mygeckoScreens)/types";
import Spinner from "react-native-loading-spinner-overlay";
import MyGeckoComponent from "../(mygeckoScreens)/myGeckoComponent";
import { useUser } from "@clerk/clerk-expo";

interface geckosInterface {
  name: string;
  specimen: string;
  weight: string;
  sex: string;
  dateObject: Date;
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
          console.error("Failed to fetch terrariums");
        }
      } catch (error) {
        console.error("Error fetching terrariums:", error);
      }
    };
    getGeckos();
  }, []);

  return (
    <View style={styles.container}>
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
      <Link href={"/(mygeckoScreens)/addGecko"} asChild>
        <Pressable style={{ marginRight: 15 }}>
          <Ionicons name="add-circle-outline" size={28} color={"#0076E4"} />
        </Pressable>
      </Link>
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
