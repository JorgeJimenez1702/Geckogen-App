import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import MyGecko from "../(auth)/mygecko";

const initialFormData = {
  name: "",
  specimen: "",
  weight: "",
  sex: "",
};

interface myGeckoType {
  userId: string;
  name: string;
  specimen: string;
  weight: string;
  sex: string;
  birth: string;
}

const GeckoForm = () => {
  const handleGoBack = () => {};

  const { user } = useUser();

  // Estado del formulario
  const [name, setName] = useState("");
  const [specimen, setSpecimen] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");

  const [isFormFilled, setIsFormFilled] = useState(false);

  // Estado del selector de fecha
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  // Cargar datos almacenados en AsyncStorage al iniciar
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("geckoFormData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setName(parsedData.name);
          setSpecimen(parsedData.specimen);
          setWeight(parsedData.weight);
          setSex(parsedData.sex);
          setSelectedDate(new Date(parsedData.selectedDate));
          setIsDateSelected(true);
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []); // El array vacío significa que este efecto se ejecutará solo al montar el componente

  // Guardar datos en AsyncStorage cuando el formulario cambia
  useEffect(() => {
    const saveData = async () => {
      try {
        const formData = {
          name,
          specimen,
          weight,
          sex,
          selectedDate,
        };
        await AsyncStorage.setItem("geckoFormData", JSON.stringify(formData));
      } catch (error) {
        console.error("Error saving data to AsyncStorage:", error);
      }
    };

    saveData();
  }, [name, specimen, weight, sex, selectedDate]); // Este efecto se ejecutará cada vez que estos valores cambien

  // Verificar si el formulario está lleno
  useEffect(() => {
    const isFilled =
      name.trim() !== "" &&
      specimen.trim() !== "" &&
      isDateSelected &&
      selectedDate !== null &&
      weight.trim() !== "" &&
      sex !== "";

    setIsFormFilled(isFilled);
  }, [name, specimen, isDateSelected, selectedDate, weight, sex]);

  // Mostrar el selector de fecha
  const showDatePickerModal = () => {
    setIsDateSelected(true);
    setShowDatePicker(true);
  };

  // Manejar el cambio de fecha
  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  // Manejar cambios en los campos del formulario
  const handleFieldChange = (value: string, field: string) => {
    switch (field) {
      case "name":
        if (value.length <= 50) {
          setName(value);
        } else {
          Alert.alert("Error", "Name should not exceed 50 characters.");
        }
        break;
      case "specimen":
        if (value.length <= 50) {
          setSpecimen(value);
        } else {
          Alert.alert("Error", "Specimen should not exceed 50 characters.");
        }
        break;
      case "weight":
        const weightRegex = /^(\d+)(g?)$/;
        const match = value.match(weightRegex);
        const numericValue = match ? Number(match[1]) : NaN;

        if (
          value === "" ||
          (match && numericValue > 0 && numericValue <= 1000)
        ) {
          // Si el campo está vacío o el valor es válido, establece el nuevo valor
          setWeight(value);
        } else {
          Alert.alert(
            "Error",
            "Weight should be in the range of 1g to 1000g and cannot be 0."
          );
        }
        break;
    }
  };

  // Manejar cambios en el selector de sexo
  const handleSexChange = (itemValue: string) => {
    setSex(itemValue);
  };

  // Función para restablecer el formulario
  const resetForm = () => {
    setName("");
    setSpecimen("");
    setWeight("");
    setSex("");
    setSelectedDate(new Date());
    setIsDateSelected(false);
    setIsFormFilled(false);
  };

  // Guardar los datos del gecko
  const handleSaveGeckoData = async () => {
    if (isFormFilled) {
      //try catch sending form data to firebase
      try {
        const dateObject1 = selectedDate.toISOString();
        const MyGeckoInfo = {
          userId: user?.id as string,
          name,
          specimen,
          weight,
          sex,
          birth: dateObject1,
        };
        console.log(MyGeckoInfo);
        const response = await fetch(
          `https://api-jtnmag5rtq-uc.a.run.app/api/mygeckos`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(MyGeckoInfo),
          }
        );
        console.log(response.ok);

        if (response.ok) {
          console.log("Gecko Uploaded Successfully");
          Alert.alert("Success", "Gecko data saved successfully.");
        } else {
          Alert.alert("Success", "Gecko data saved successfully");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }

      // Resetear el formulario después de guardar
      resetForm();
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };

  // Renderizar el formulario
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Comportamiento de ajuste del teclado
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Link href="/(auth)/mygecko">
              <Ionicons name="chevron-back" size={28} color="#0076E4" />
            </Link>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add a new gecko</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Enter your gecko's name"
              placeholderTextColor="#D0D0D0"
              value={name}
              onChangeText={(value) => {
                handleFieldChange(value, "name");
              }}
              style={styles.inputField}
            />
            <Text style={styles.text}>Specimen</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Enter your gecko's specimen"
              placeholderTextColor="#D0D0D0"
              value={specimen}
              onChangeText={(value) => {
                handleFieldChange(value, "specimen");
              }}
              style={styles.inputField}
            />
          </View>

          <View style={styles.inputFieldContainer}>
            <Text style={styles.text}>Hatch date</Text>
            <View style={styles.dateInputContainer}>
              <TextInput
                value={isDateSelected ? format(selectedDate, "yyyy-MM-dd") : ""}
                placeholder={isDateSelected ? "" : "Enter gecko's hatch date"}
                style={[
                  styles.inputFieldWithIcon,
                  isDateSelected && styles.selectedDateText,
                ]}
                editable={false}
              />
              <TouchableOpacity
                style={styles.datePickerButton}
                onPress={showDatePickerModal}
              >
                <Ionicons name="calendar-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              is24Hour={true}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleDateChange}
            />
          )}

          <Text style={styles.text}>Weight in grams</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Enter gecko's weight"
            placeholderTextColor="#D0D0D0"
            value={weight}
            onChangeText={(value) => {
              handleFieldChange(value, "weight");
            }}
            style={styles.inputField}
          />

          <View style={styles.pickerContainer}>
            <Text style={styles.text}>Sexing</Text>
            <View style={styles.pickerWithText}>
              <Picker
                selectedValue={sex}
                onValueChange={(itemValue) => {
                  handleSexChange(itemValue);
                }}
                mode="dropdown"
                style={styles.pickerStyle}
              >
                <Picker.Item label="" value="" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Male" value="male" />
              </Picker>

              {sex === "" && (
                <Text style={styles.placeholderText}>
                  Enter your gecko's sexing
                </Text>
              )}
            </View>
          </View>

          <View style={styles.container}>
            <TouchableOpacity
              style={{
                ...styles.saveButton,
                backgroundColor: isFormFilled ? "#2196F3" : "#D0D0D0",
              }}
              onPress={() => handleSaveGeckoData()}
              disabled={!isFormFilled}
            >
              <Text style={styles.buttonText}>Add gecko</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
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
    borderColor: "#D0D0D0",
    borderRadius: 10,
    backgroundColor: "#fff",
    textAlign: "left",
    padding: 15,
    marginBottom: 10,
  },
  inputFieldWithIcon: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 10,
    backgroundColor: "#fff",
    textAlign: "left",
    padding: 15,
    paddingRight: 40,
  },
  datePickerButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  dateInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingVertical: 10,
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    marginBottom: -10,
  },
  pickerContainer: {
    marginTop: 5,
  },
  pickerWithText: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginTop: 2,
  },
  pickerStyle: {
    flex: 1,
    height: 50,
    backgroundColor: "transparent",
    borderWidth: 0,
    marginRight: 5,
  },
  placeholderText: {
    color: "#D0D0D0",
    flex: 1,
    marginLeft: 15,
    position: "absolute",
    left: 0,
    right: 0,
    top: 15,
    zIndex: 1,
  },
  saveButton: {
    width: 350,
    marginTop: 80,
    borderRadius: 10,
    height: 50,
    marginLeft: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
  },
  selectedDateText: {
    color: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 80,
    marginBottom: 40,
  },
  backButton: {
    marginRight: 20,
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    marginTop: 50,
  },
});

export default GeckoForm;
