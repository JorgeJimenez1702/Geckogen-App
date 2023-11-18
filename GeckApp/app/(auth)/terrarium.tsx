import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';


const terrarium = () => {

  return (
    <View style={styles.container}>
      <View style={styles.moduleBox}>
        <Link href="/(TerrariumFunctions)/TerrariumInterface" asChild>
          <TouchableOpacity style={styles.moduleTextContainer}>
            <Text style={styles.moduleText}>Module 1</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
  moduleBox: {
    width: 341,
    height: 193,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1
  },
  moduleTextContainer: {
    marginTop: 142,
    marginLeft: 25,
  },
  moduleText:{
    color: '#000',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

export default terrarium;