import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

const Home = () => {
  const { user } = useUser();

return (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome, {user?.firstName}!</Text>

    <View style={styles.staticBox}>
      <Text style={styles.staticBoxText}>Get your gecko genome</Text>
    </View>

    <Text style={styles.additionalText}>New featured products</Text>


  </View>
);
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFF',
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: 30,
  },
  text: {
     color: '#000000',
     fontSize: 24,
     fontStyle: 'normal',
     fontWeight: '700',
     textAlign: 'left',
     paddingTop: 20,   
  },

  staticBox: {
    width: 341,
    height: 193,
    borderRadius: 30, // Borde redondeado 
    borderWidth: 1, // Ancho del borde
    borderColor: '#E2E2E2', // Color del borde
    marginVertical: 20, // Espacio entre el cuadro y el texto
  },
  staticBoxText: {
    color: '#000000', // Color del texto dentro del cuadro
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 150, // Espacio entre el texto y el borde superior del cuadro
  },

  additionalText: {
    color: '#000000',
    fontSize: 18, // Ajusta el tamaño de fuente según tus necesidades
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left', // Alineación del texto
    paddingHorizontal: 20,
    marginTop: 10, // Espacio entre el texto adicional y el cuadro estático
    
  },
  

});

export default Home;