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
      name="myGeckoInterface"
      options={{
        headerTitle: "My Gecko",
      }}
    ></Stack.Screen>
  </Stack>;
};

export default myGeckoLayout;
