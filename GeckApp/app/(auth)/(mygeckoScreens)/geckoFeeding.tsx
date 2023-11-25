import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';
import DateTimePicker, { Event as DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface CustomChangeEvent {
  nativeEvent: {
    timestamp?: number;
  };
}

const GeckoFeeding = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedFood, setSelectedFood] = useState('none');

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('geckoFeedingData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setSelectedDate(new Date(parsedData.selectedDate));
          setSelectedFood(parsedData.selectedFood || 'none');
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        const feedingData = {
          selectedDate,
          selectedFood,
        };
        await AsyncStorage.setItem('geckoFeedingData', JSON.stringify(feedingData));
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    };

    saveData();
  }, [selectedDate, selectedFood]);

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = ({ nativeEvent }: CustomChangeEvent) => {
    setShowDatePicker(false);

    if (nativeEvent && nativeEvent.timestamp) {
      setSelectedDate(new Date(nativeEvent.timestamp));
    }
  };

  const handleFoodChange = (itemValue: string) => {
    setSelectedFood(itemValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePickerModal}>
        <Text>Date: {format(selectedDate, 'yyyy-MM-dd')}</Text>
      </TouchableOpacity>

      <Calendar
        style={styles.calendar}
        current={format(selectedDate, 'yyyy-MM-dd')}
        onDayPress={(day) => setSelectedDate(new Date(day.dateString))}
        markedDates={
          selectedFood === 'none'
            ? {}
            : {
                [format(selectedDate, 'yyyy-MM-dd')]: {
                  selected: true,
                  selectedColor:
                    selectedFood === 'formula' ? '#0076E4' : selectedFood === 'insects' ? '#28B446' : 'transparent',
                },
              }
        }
      />

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={(event, date) => handleDateChange({ nativeEvent: { timestamp: date?.getTime() } })}
        />
      )}

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Food Type</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedFood}
            onValueChange={handleFoodChange}
            style={styles.picker}
          >
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Formula" value="formula" />
            <Picker.Item label="Insects" value="insects" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    width: 350,
    height: 106.75,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: '#fff',
  },
  pickerLabel: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  pickerWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  picker: {
    width: '90%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#0076E4',
    left: 17,
  },
  calendar: {
    marginTop: 20,
    width: 341,
    height: 318,
    borderRadius: 10,
  },
});

export default GeckoFeeding;