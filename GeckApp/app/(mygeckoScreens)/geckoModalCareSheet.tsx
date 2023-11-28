import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GeckoCareSheetModalProps {
  isVisible: boolean;
  closeModal: () => void;
}

const GeckoCareSheetModal: React.FC<GeckoCareSheetModalProps> = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
      <TouchableOpacity
          style={styles.closeIconContainer}
          onPress={closeModal}
        >
          <Ionicons name="close" size={28} color="#33363F" />
        </TouchableOpacity>
        <ScrollView>
          <Text style ={styles.titleText}>Care Sheet</Text>
          <View style={styles.subtitleContainer}>
            <Ionicons name="checkmark-circle" size={24} color="#0076E499" style={styles.titleIcon} />
            <Text style={styles.highlightedText}>General Information</Text>
          </View>
          <Text style={styles.modalText}>
            House your gecko in a well-ventilated cage. The minimum size required depends on the species, such information can be found under the category of interest.
          </Text>
          <Text style={styles.modalText}>
            The geckos come from a semitropical forest (New Caledonia) and are most comfortable at a temperature range of 68-82 degrees Fahrenheit. Temperatures outside the recommended range can stress/kill your gecko very quickly.
          </Text>
          <Text style={styles.modalText}>
            A humidity gradient ranging from 50-80% should be provided. One way to accomplish such humidity range is by spraying the enclosure first thing in the morning and also at bed time. Spraying water at the beginning or end of the day will allow for the humidity to rise and evaporate between misting times. Provide a shallow water dish as well, this will help in keeping up the humidity. The geckos enjoy drinking water from spray droplets and will readily drink when sprayed on.
          </Text>
          <Text style={styles.modalText}>
          <Text style={styles.highlightedText}>WARNING:</Text> A heat lamp is not needed - The heat will kill the gecko quickly. <Text style={styles.highlightedText}>DO NOT USE!</Text>
          </Text>
          <Text style={styles.modalText}>
            A UV light can be used for live plants in the terrarium; there is no negative effect on your gecko. Make sure it doesn't add too much heat to the habitat. Digital lights can be used safely for viewing your gecko because they don't add heat or add a minimum heat to the habitat.
          </Text>
          <View style={styles.subtitleContainer}>
            <Ionicons name="checkmark-circle" size={24} color="#0076E499" style={styles.titleIcon} />
            <Text style={styles.highlightedText}>Diet</Text>
          </View>
          <Text style={styles.modalText}>
            Feeding your gecko the proper diet is the most important part of its care. The meal replacement formula is the most important part of the gecko's diet and has all the necessary elements your gecko needs to thrive.
          </Text>
          <Text style={styles.modalText}>
            We recommend live insect feeding on occasion to provide additional protein needed. Feeding live food will prompt your gecko to exercise its natural behavior. Never use insects as the primary food source. Insects don't contain all the necessary nutrients your gecko needs to be healthy.
          </Text>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 1, 
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'justify',
    color: 'black',
  },
  titleText:{
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 12,
    fontWeight: '700',
    textAlign: 'justify',
    color: 'black',
  },
  highlightedText:{
    fontSize: 16,
    lineHeight: 24,
    marginBottom: -10,
    fontWeight: '700',
    textAlign: 'justify',
    color: 'black',
  },
  titleIcon:{
    marginRight: 8,
    transform: [{ translateY: 5 }],

  },
});

export default GeckoCareSheetModal;
