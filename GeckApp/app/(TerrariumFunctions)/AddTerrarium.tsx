import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const AddTerrarium = () => {
  const [terrariumName, setTerrariumName] = useState("");
  const [terrariumCode, setTerrariumCode] = useState("");
  const [WiFiAddress, setWiFiAddress] = useState("");
  const [WiFiPassword, setWiFiPassword] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text>Terrarium Name</Text>
      <TextInput
        placeholder="Enter your terrarium name"
        placeholderTextColor={"#000"}
        value={terrariumName}
        onChangeText={setTerrariumName}
        style={styles.inputField}
      />

      <Text>Terrarium Code</Text>
      <TextInput
        placeholder="Enter your terrarium code"
        placeholderTextColor={"#000"}
        value={terrariumCode}
        onChangeText={setTerrariumCode}
        style={styles.inputField}
      />
      
      <Text>WiFi Address</Text>
      <TextInput
        placeholder="Enter a WiFi Address"
        placeholderTextColor={"#000"}
        value={WiFiAddress}
        onChangeText={setWiFiAddress}
        style={styles.inputField}
      />

      <Text>WiFi Password</Text>
      <TextInput
        placeholder="Enter a WiFi Password"
        placeholderTextColor={"#000"}
        value={WiFiPassword}
        onChangeText={setWiFiPassword}
        style={styles.inputField}
      />


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    contentContainerStyle: "flex-start",
    backgroundColor: "#FFF",
    padding: 40,
  },
  inputField: {
    marginVertical: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#0076E4",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    marginTop: 26,
    marginBottom: 116,
    backgroundColor: "#0076E4",
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "#D9D9D9",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
  },
});

export default AddTerrarium;
