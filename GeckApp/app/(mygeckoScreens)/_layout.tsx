import { Stack } from "expo-router";

const myGeckoLayout = () => {
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTintColor: "#000",
    }}
  >
    <Stack.Screen
      name="geckoMain"
      options={{
        headerTitle: "",
        headerShown: false,
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="geckoForm"
      options={{
        headerTitle: "",
        headerShown: false,
      }}
    ></Stack.Screen>
  </Stack>;
};

export default myGeckoLayout;
