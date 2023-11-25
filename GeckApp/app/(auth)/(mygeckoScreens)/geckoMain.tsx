import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GeckoMain = () => {
  const [isCareSheetModalVisible, setCareSheetModalVisible] = useState(false);

  const openCareSheetModal = () => {
    setCareSheetModalVisible(true);
  };

  const closeCareSheetModal = () => {
    setCareSheetModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Apocalypto</Text>

      <View style={styles.boxContainer}>
        <View style={styles.leftBox}>
          <Text style={styles.largeText}>21</Text>
          <Text style={styles.smallText}>Hatch Date (Days ago)</Text>
        </View>

        <View style={styles.division}></View>

        <View style={styles.rightBox}>
          <Text style={styles.extraLargeText}>4</Text>
          <Text style={styles.smallText}>Weight (gr)</Text>
          <Text style={styles.mediumText}>Male</Text>
          <Text style={styles.smallText}>Sexing</Text>
        </View>
      </View>

      <TouchableOpacity onPress={openCareSheetModal} style={styles.additionalBox}>
        <Ionicons name="document-text-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.additionalBoxText}>General care sheet</Text>
      </TouchableOpacity>

      <View style={styles.additionalBox}>
        <Ionicons name="bug-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.additionalBoxText}>Feeding</Text>
      </View>

      <View style={styles.upcomingEventsBox}>
        <Text style={styles.upcomingEventsText}>Upcoming events</Text>

        <View style={styles.upcomingEventsInnerBox}>
          <View style={styles.upcomingEventItem}>
            <Text style={styles.eventDescription}>Mating season</Text>
            <Text style={styles.eventSubtitle}>Early spring</Text>
            <Text style={styles.eventDescription}>Take advantage of this spring start to match your gecko.</Text>
          </View>
        </View>

        <View style={styles.division}></View>

        <View style={styles.upcomingEventsInnerBox}>
          <View style={styles.upcomingEventItem}>
            <Text style={styles.eventDescription}>Season completed</Text>
            <Text style={styles.eventSubtitle}>Skin Shedding</Text>
            <View style={styles.eventDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailSubtitle}>4</Text>
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
        <Text style={styles.addEventText}>Add Event</Text>
        <Ionicons name="add-circle-outline" size={60} color="white" style={styles.iconEvent} />
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isCareSheetModalVisible}
        onRequestClose={closeCareSheetModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.titleModal}>Care sheet</Text>
            </View>
            <View style={styles.modalHeader}>
            <Ionicons name="checkmark-circle-outline" size={30} color="#0076E4" />
            <Text style={styles.subtitleModal}>General information</Text>
            </View>

            <Text></Text>
            
            <TouchableOpacity onPress={closeCareSheetModal} style={styles.closeButton}>
              <Ionicons name="close-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  text: {
    color: '#000000',
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 30,
  },
  boxContainer: {
    flexDirection: 'row',
    height: 130,
    width: 340,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  division: {
    flex: 0.01,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },
  leftBox: {
    flex: 1,
    alignItems: 'center',
  },
  rightBox: {
    flex: 1,
    alignItems: 'center',
  },
  largeText: {
    fontSize: 60,
    fontWeight: '700',
  },
  extraLargeText: {
    fontSize: 30,
    fontWeight: '700',
  },
  mediumText: {
    fontSize: 20,
    fontWeight: '700',
  },
  smallText: {
    fontSize: 13,
    marginTop: -2,
  },
  additionalBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  upcomingEventsText: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  upcomingEventsInnerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 328,
    height: 120,
    marginTop: 10,
  },
  upcomingEventItem: {
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    width: 160, 
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
  },
  detailSubtitle: {
    fontSize: 16, 
    marginTop: 3,
  },
  detailSubText: {
    fontSize: 12,
    marginTop: 3,
  },
  addEventBox: {
    marginTop: -8,
    backgroundColor: '#0076E4',
    padding: 7,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
  },
  addEventText: {
    fontSize: 17,
    marginLeft: 6,
    fontWeight: '700',
    color: "#fff",
  },
  iconEvent: {
    position: 'absolute',
    right: -8,
    top: '50%',
    transform: [{ translateY: -25 }],
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleModal: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
  },
  subtitleModal:{
    fontSize: 14,
    fontWeight: '700', 
  },
});

export default GeckoMain;

