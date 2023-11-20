import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


const GeckoForm = () => {
  

  const [Name, setName] = useState('');
  const [Specimen, setSpecimen] = useState('');
  const [Weight, setWeight] = useState('');
  const [Sex, setSex] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);



  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleInputChange = (value: string, field: string) => {
    switch (field) {
      case 'Name':
        setName(value);
        break;
      case 'Specimen':
        setSpecimen(value);
        break;
      case 'Weight':
        setWeight(value);
        break;
      // Handle other fields as needed
      default:
        break;
    }
  
    // Verifica si todos los campos están llenos
    const isFilled =
      Name !== '' && Specimen !== '' && selectedDate !== null && Weight !== '' && Sex !== '';
    setIsFormFilled(isFilled);
  };


  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setSelectedDate(selectedDate);
      // Aquí puedes manejar la fecha seleccionada, como guardarla en el estado de tu formulario.
    }
  };

  const handleSave = () => {
    if (isFormFilled) {
      // Lógica para guardar los datos
      Alert.alert('Success', 'Gecko data saved successfully.');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter your gecko's name"
          placeholderTextColor="#D0D0D0"
          value={Name}
          onChangeText={setName}
          style={styles.inputField}
        />
        <Text style={styles.text}>Specimen</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter your gecko's specimen"
          placeholderTextColor="#D0D0D0"
          value={Specimen}
          onChangeText={setSpecimen}
          style={styles.inputField}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={styles.text}>Hatch date</Text>
        <View style={styles.dateInputContainer}>
          <TextInput
            value={selectedDate.toISOString().split('T')[0]}
            placeholder="Enter gecko's hatch date"
            style={styles.inputFieldWithIcon}
            editable={false} // Para que no sea editable directamente
          />
          <TouchableOpacity style={styles.datePickerButton} onPress={showDatepicker}>
            <Ionicons name="calendar-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}

        <Text style={styles.text}>Weight in grams</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter gecko's weight"
          placeholderTextColor="#D0D0D0"
          value={Weight}
          onChangeText={setWeight}
          style={styles.inputField}
        />

      <View style={styles.pickerContainer}>
        <Text style={styles.text}>Sexing</Text>
        <View style={styles.pickerWithText}>
          {Sex === '' && (
            <Text style={styles.placeholderText}>Enter your gecko's sexing</Text>
          )}
          <Picker
            selectedValue={Sex}
            onValueChange={(itemValue) => setSex(itemValue)}
            mode="dialog"
            style={styles.pickerStyle}
          >
            <Picker.Item label="" value="" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>
      </View>

      <View style={styles.container}>
      {/* ... (resto de tu código) */}

      <TouchableOpacity
        style={{
          ...styles.saveButton,
          backgroundColor: isFormFilled ? '#2196F3' : '#D0D0D0',
        }}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 5,
  },
  inputFieldContainer: {
    marginBottom: 20,
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
    padding: 15,
    marginBottom: 10,
  },
  inputFieldWithIcon: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
    padding: 15,
    paddingRight: 40,
  },
  datePickerButton: {
    position: 'absolute',
    top: 15, 
    right: 15,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingVertical: 10,
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: -10,
  },

  pickerContainer: {
    marginTop: 5, 
  },
  pickerWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: 10, 
  },
  pickerStyle: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent', // Hacer el fondo transparente
    borderWidth: 0,
    marginRight: 10, // Ajuste para la separación del icono
  },
  placeholderText: {
    color: '#D0D0D0',
    flex: 1, // Para ocupar el espacio restante
    marginLeft: 15, // Ajuste para la separación del texto
    position: 'absolute',
    left: 0,
    right: 0,
    top: 15,
    zIndex: 1, // Para que esté encima del Picker
  },

  saveButton: {
    width: 300,
    marginTop: 50,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },


});

export default GeckoForm;