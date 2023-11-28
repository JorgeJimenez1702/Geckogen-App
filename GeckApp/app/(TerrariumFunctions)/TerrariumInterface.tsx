import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';


const TerrariumInterface = () => {
  const params = useLocalSearchParams();
  const {
    id,
    Name,
    Humidity,
    Light_Cycle,
    Oxigenation,
    Temperature
  } = params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {Name}
      </Text>
      <View style={styles.tableContainer}>
        <View style={styles.row}>


          <View style={styles.column}>
            <View style={styles.moduleBox}>


              <Text style={styles.subtitle}>Humidity</Text>
              <Text style={styles.DataStyle}>
                {Humidity}<Text style={styles.metricStyle}>%</Text>
              </Text>
              <Text style={styles.textStyle}>The Humidity in the terrarium is stable</Text>


            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.moduleBox}>

              <Text style={styles.subtitle}>Oxigenation</Text>
              <Text style={styles.DataStyle}>
                {Oxigenation}<Text style={styles.metricStyle}>%</Text>
              </Text>
              <Text style={styles.textStyle}>Average oxygenation.</Text>

            </View>
          </View>


        </View>

        <View style={styles.row}>


          <View style={styles.column}>
            <View style={styles.moduleBox}>
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.moduleBox}>

              <Text style={styles.subtitle}>Temperature</Text>
              <Text style={styles.DataStyleT}>
                {Temperature}<Text style={styles.metricStyleT}>°F</Text>
              </Text>
              <Text style={styles.textStyle}>Your gecko is at regular temperature.</Text>


            </View>
          </View>


        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.bottomModuleBox1}>
              <Text style={styles.notificationStyle}>Notifications</Text>
            </View>
            <View style={styles.bottomModuleBox2}>

              <Text style={styles.generalControlStyle}>
                <Ionicons name="settings-sharp" size={20} color={'#000'} />
                <Text>   </Text>
                <Text style={styles.generalControlText}>
                  Terrarium general control center
                </Text>
              </Text>
              
            </View>
          </View>
        </View>
      </View>
      {/*<Text>
        {id},
      </Text>
      
      <Text>
        {Humidity},
      </Text>
      <Text>
        {Light_Cycle},
      </Text>
      <Text>
        {Oxigenation},
      </Text>
      <Text>
        {Temperature},
      </Text>*/}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: '#FFF',
  },


  tableContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



  moduleBox: {
    width: 163,
    height: 182,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: 20,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1
  },
  bottomModuleBox1: {
    width: 345,
    height: 110,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1
  },
  bottomModuleBox2: {
    width: 345,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1
  },
  title: {
    paddingTop: 23,
    paddingBottom: 23,
    color: '#000',
    textAlign: 'center',
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  moduleText: {
    marginTop: 26,
    marginLeft: 26,
    width: 125,
    height: 21,
    color: '#000',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  subtitle: {
    width: 120,
    height: 30,
    padding: 10,
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  DataStyle: {
    color: '#000',
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 15,
    fontSize: 64,
  },
  DataStyleT: {
    color: '#000',
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 15,
    fontSize: 54,
  },
  metricStyle: {
    width: 20.371,
    height: 25,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexShrink: 0,
    fontSize: 32,
    fontWeight: '700',
  },
  metricStyleT: {
    width: 20.371,
    height: 25,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexShrink: 0,
    fontSize: 24,
    fontWeight: '700',
  },
  textStyle: {
    width: 136.778,
    height: 50,
    flexShrink: 0,
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 10,
  },
  notificationStyle: {
    width: 114,
    height: 20,
    flexShrink: 0,
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 20,
  },
  generalControlStyle: {
    padding: 12,
  },
  generalControlText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  }
});

export default TerrariumInterface;