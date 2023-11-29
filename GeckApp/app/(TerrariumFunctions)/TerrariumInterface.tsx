import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Feather, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";

const TerrariumInterface = () => {
  const params = useLocalSearchParams();
  const { id, Name, Humidity, Light_Cycle, Oxigenation, Temperature } = params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Name}</Text>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.moduleBox}>
              <View style={styles.buttonContainer}>
                <Ionicons
                  name="water-outline"
                  size={24}
                  color={"#8E00C1"}
                />
                <Text style={styles.subtitle}>Humidity</Text>
              </View>

              <Text style={styles.DataStyle}>
                {Humidity}
                <Text style={styles.metricStyle}>%</Text>
              </Text>
              <Text style={styles.textStyle}>
                The Humidity in the terrarium is stable
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <TouchableOpacity style={styles.moduleBox}>
              <View style={styles.buttonContainer}>
                <MaterialIcons 
                  name="bubble-chart"
                  size={24}
                  color={"#0076E4"}
                />
                <Text style={styles.subtitle}>Oxigenation</Text>
              </View>

              <Text style={styles.DataStyle}>
                {Oxigenation}
                <Text style={styles.metricStyle}>%</Text>
              </Text>
              <Text style={styles.textStyle}>Average oxygenation.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.moduleBox}>
              <View style={styles.buttonContainer}>
                <Feather
                  name="sun"
                  size={24}
                  color={"#33363F"}
                />
                <Text style={styles.subtitle}>Light Cycle</Text>
              </View>
              <Text style={styles.DataStyleT}>
                5:50
                <Text style={styles.metricStyleT}>pm</Text>
              </Text>
              <Text style={styles.textStyle}>
                Lights will be turned off at sunset
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <TouchableOpacity style={styles.moduleBox}>
              <View style={styles.buttonContainer}>
                <FontAwesome5
                  name="temperature-high"
                  size={24}
                  color={"#E86505"}
                />
                <Text style={styles.subtitle}>Temperature</Text>
              </View>
              <Text style={styles.DataStyleT}>
                {Temperature}
                <Text style={styles.metricStyleT}>°F</Text>
              </Text>
              <Text style={styles.textStyle}>
                Your gecko is at regular temperature.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.bottomModuleBox1}>
              <View>
                <View style={styles.buttonContainer2}>
                  <Feather
                    name="bell"
                    size={24}
                    color={"#000"}
                  />
                  <Text style={styles.notificationStyle}>Notifications</Text>
                  <Text style={styles.notifTimeStyle}>2 hours ago</Text>
                </View>
                <View>
                  <Text style={styles.textStyle}>
                    The temperature in Terrarium Module 1 is a bit high.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 30,
    backgroundColor: "#FFF",
  },

  tableContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer2: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  moduleBox: {
    width: 163,
    height: 182,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginVertical: 20,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  bottomModuleBox1: {
    width: 345,
    height: 110,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  bottomModuleBox2: {
    width: 345,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginVertical: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  title: {
    paddingBottom: 23,
    color: "#000",
    textAlign: "center",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "700",
  },
  moduleText: {
    marginTop: 26,
    marginLeft: 26,
    width: 125,
    height: 21,
    color: "#000",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
  },
  subtitle: {
    marginLeft: 5,
    color: "#000",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
  },
  DataStyle: {
    color: "#000",
    fontStyle: "normal",
    fontWeight: "700",
    marginLeft: 15,
    fontSize: 64,
  },
  DataStyleT: {
    color: "#000",
    fontStyle: "normal",
    fontWeight: "700",
    marginLeft: 15,
    fontSize: 54,
  },
  metricStyle: {
    width: 20.371,
    height: 25,
    flexDirection: "column",
    justifyContent: "flex-end",
    flexShrink: 0,
    fontSize: 32,
    fontWeight: "700",
  },
  metricStyleT: {
    width: 20.371,
    height: 25,
    flexDirection: "column",
    justifyContent: "flex-end",
    flexShrink: 0,
    fontSize: 24,
    fontWeight: "700",
  },
  textStyle: {
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 10,
  },
  notificationStyle: {
    flexShrink: 0,
    color: "#000",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 5,
  },
  generalControlStyle: {
    padding: 12,
  },
  generalControlText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "600",
  },
  notifTimeStyle: {
    marginLeft: 90,
    color: '#D0D0D0',
    fontSize: 15,
    fontWeight: '400',
  },
});

export default TerrariumInterface;
