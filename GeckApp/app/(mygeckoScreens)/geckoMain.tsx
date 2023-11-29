import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GeneralCareSheetModal from "./geckoModalCareSheet";
import { Link, Stack, useLocalSearchParams } from "expo-router";

export const BackButton = () => {
  return (
    <Link href={"/(auth)/mygecko"} asChild>
      <Pressable style={{ marginRight: 15 }}>
        <Ionicons name="chevron-back" size={28} color={"#0076E4"} />
      </Pressable>
    </Link>
  );
};

const GeckoMain = () => {
  const params = useLocalSearchParams();
  const { userId, name, specimen, weight, sex, dateObject } = params;

  const [isGeneralCareModalVisible, setGeneralCareModalVisible] =
    useState(false);
  const [isEventsModalVisible, setEventsModalVisible] = useState(false);

  const openGeneralCareModal = () => {
    setGeneralCareModalVisible(true);
  };

  const closeGeneralCareModal = () => {
    setGeneralCareModalVisible(false);
  };

  const openEventsModal = () => {
    setEventsModalVisible(true);
  };

  const closeEventsModal = () => {
    setEventsModalVisible(false);
  };

  const navigateToEventsModal = () => {
    openEventsModal();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: " ",
          headerTintColor: "#000",
          headerTransparent: true,
          headerBlurEffect: "extraLight",
          headerLeft: () => <BackButton />,
        }}
      />
      <Text style={styles.text}>{name}</Text>

      <View style={styles.boxContainer}>
        <View style={styles.leftBox}>
          <Text style={styles.largeText}>21</Text>
          <Text style={styles.smallText}>Hatch Date (Days ago)</Text>
        </View>

        <View style={styles.division}></View>

        <View style={styles.rightBox}>
          <Text style={styles.extraLargeText}>{weight}</Text>
          <Text style={styles.smallText}>Weight (gr)</Text>
          <Text style={styles.mediumText}>{sex}</Text>
          <Text style={styles.smallText}>Sexing</Text>
        </View>
      </View>

      <View style={styles.additionalBox}>
        <TouchableOpacity onPress={openGeneralCareModal}>
          <Ionicons
            name="document-text-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.additionalBoxText}>General care sheet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.additionalBox}>
        <Ionicons
          name="bug-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.additionalBoxText}>Feeding</Text>
      </View>

      <View style={styles.upcomingEventsBox}>
        <Text style={styles.upcomingEventsText}>Upcoming events</Text>

        <View style={styles.upcomingEventsInnerBox}>
          <View style={styles.upcomingEventItem}>
            <Text style={styles.eventDescription}>Mating season</Text>
            <Text style={styles.eventSubtitle}>Early spring</Text>
            <Text style={styles.eventDescription}>
              Take advantage of this spring start to match your gecko.
            </Text>
          </View>
        </View>

        <View style={styles.division}></View>

        <View style={styles.upcomingEventsInnerBox}>
          <View style={styles.upcomingEventItem}>
            <Text style={styles.eventDescription}>Season completed</Text>
            <Text style={styles.eventSubtitle}>Skin Shedding</Text>
            <View style={styles.eventDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.eventSubtitle}>4</Text>
                <Text style={styles.detailSubText}>Days duration</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailSubText}>Last skin duration</Text>
                <Text style={styles.detailText}>10/25/2023</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailText}>Molts</Text>
                <Text style={styles.detailSubText}>2</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.addEventBox}>
        <TouchableOpacity onPress={navigateToEventsModal}>
          <Text style={styles.addEventText}>Add Event</Text>
          <Ionicons
            name="add-circle-outline"
            size={60}
            color="white"
            style={styles.iconEvent}
          />
        </TouchableOpacity>
      </View>

      <GeneralCareSheetModal
        isVisible={isGeneralCareModalVisible}
        closeModal={closeGeneralCareModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  text: {
    color: "#000000",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 30,
  },
  boxContainer: {
    flexDirection: "row",
    height: 130,
    width: 340,
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  division: {
    flex: 0.01,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 5,
  },
  leftBox: {
    flex: 1,
    alignItems: "center",
  },
  rightBox: {
    flex: 1,
    alignItems: "center",
  },
  largeText: {
    fontSize: 60,
    fontWeight: "700",
  },
  extraLargeText: {
    fontSize: 30,
    fontWeight: "700",
  },
  mediumText: {
    fontSize: 20,
    fontWeight: "700",
  },
  smallText: {
    fontSize: 13,
    marginTop: -2,
  },
  additionalBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    width: 344,
    height: 56,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
  },
  additionalBoxText: {
    fontSize: 17,
    marginLeft: 10,
  },
  upcomingEventsBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  upcomingEventsText: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
  upcomingEventsInnerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 328,
    height: 120,
    marginTop: 10,
  },
  upcomingEventItem: {
    borderColor: "#E2E2E2",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    width: 330,
  },
  eventSubtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  eventDescription: {
    fontSize: 12,
    marginTop: 3,
  },
  eventDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  detailItem: {
    alignItems: "center",
  },
  detailText: {
    fontSize: 14,
  },
  detailSubText: {
    fontSize: 12,
    marginTop: 3,
  },
  addEventBox: {
    marginTop: -8,
    backgroundColor: "#0076E4",
    padding: 7,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    width: 150,
  },
  addEventText: {
    fontSize: 17,
    marginLeft: 6,
    fontWeight: "700",
    color: "#fff",
  },
  iconEvent: {
    position: "absolute",
    right: -60,
    top: "35%",
    transform: [{ translateY: -28 }],
  },
});

export default GeckoMain;
