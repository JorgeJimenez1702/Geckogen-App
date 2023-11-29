import React from "react";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const mygeckoLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#000",
      }}
    >
      <Stack.Screen
        name="GeckoMain"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerBlurEffect: 'extraLight',
        }}
      />
    </Stack>
  );
};

export default mygeckoLayout;
