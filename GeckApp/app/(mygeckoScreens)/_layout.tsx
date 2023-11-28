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
      name="addGecko"
      options={{
        headerTitle: "ADD GECKO",
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="GeckoForm"
      options={{
        headerTitle: "geckoForm",
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="geckoModalCareSheet"
      options={{
        headerTitle: "geckoForm",
        headerShown: false,
      }}
    ></Stack.Screen>
    <Stack.Screen
      name="geckoComponent"
      options={{
        headerTitle: "geckoForm",
        headerShown: false,
      }}
    ></Stack.Screen>
  </Stack>;
};

export default myGeckoLayout;
