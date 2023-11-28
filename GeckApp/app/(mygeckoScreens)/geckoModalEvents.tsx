import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Switch, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GeckoEventsModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

const GeckoModalEvents: React.FC<GeckoEventsModalProps> = ({ isVisible, closeModal }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [allDay, setAllDay] = useState(false);
  const [location, setLocation] = useState('');
  const [tag, setTag] = useState('');
  const [isTitleFocused, setIsTitleFocused] = useState(false);

  const handleCreateEvent = () => {
    console.log({
      eventTitle,
      eventDescription,
      eventStartDate,
      eventEndDate,
      allDay,
      location,
      tag,
    });

    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.titleText}>Create event</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Event title"
            placeholderTextColor="black"
            value={eventTitle}
            onChangeText={(text) => setEventTitle(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.locationTagInput]}
            placeholder="Event description"
            placeholderTextColor="black"
            value={eventDescription}
            onChangeText={(text) => setEventDescription(text)}
          />
        </View>

        <Text style={styles.modalText}>Event Date and Time</Text>

        <Text style={styles.modalText}>Starts</Text>

        <Text style={styles.modalText}>Ends</Text>

        <Text style={styles.modalText}>All Day</Text>
        <Switch value={allDay} onValueChange={() => setAllDay(!allDay)} />

        <View style={styles.inputContainer}>
          <View style={styles.tagIconWrapper}>
            <Ionicons name="location-outline" size={24} color="black" />
          </View>
          <TextInput
            style={[styles.input, styles.locationTagInput]}
            placeholderTextColor="black"
            placeholder="Event location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.tagIconWrapper}>
            <Ionicons name="pricetag-outline" size={24} color="black" />
          </View>
          <TextInput
            style={[styles.input, styles.locationTagInput]}
            placeholderTextColor="black"
            placeholder="Event tag"
            value={tag}
            onChangeText={(text) => setTag(text)}
          />
        </View>

        <Button title="Create Event" onPress={handleCreateEvent} />

        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.closeButton}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  tagIconWrapper: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  locationTagInput: {
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  },
  titleText: {
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 12,
    fontWeight: '700',
    textAlign: 'justify',
    color: 'black',
  },
});

export default GeckoModalEvents;
