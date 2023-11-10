import { StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';
import { useUser } from '@clerk/clerk-expo';


const Home = () => {
const { user } = useUser();

const images : string []= [
  'https://img1.wsimg.com/isteam/ip/48903c19-aa69-4b53-af9a-a147ec73b323/ols/C93.jpeg/:/rs=w:1200,h:1200',
  'https://img1.wsimg.com/isteam/ip/48903c19-aa69-4b53-af9a-a147ec73b323/ols/C102.jpeg/:/rs=w:1200,h:1200',
  'https://img1.wsimg.com/isteam/ip/48903c19-aa69-4b53-af9a-a147ec73b323/ols/C72.jpeg/:/rs=w:1200,h:1200'
];


return (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome, {user?.firstName}!</Text>

    <View style={styles.staticBox}>
      <Text style={styles.staticBoxText}>Get your gecko genome</Text>
    </View>

    <Text style={styles.additionalText}>New featured products</Text>

    <PagerView style={styles.pagerView} initialPage={0}> 
      {images.map((imageUrl, index) => (
        <View key={index} style={styles.page}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      ))}
    </PagerView>

    <View style={styles.secondStaticbox}>
      <Text style={styles.secondStaticboxText}>New advances in genetics</Text>
    </View>

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
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    marginVertical: 20, 
  },
  staticBoxText: {
    color: '#000000', 
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 150, 
  },

  additionalText: {
    color: '#000000',
    fontSize: 18, 
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left', 
    paddingHorizontal: 20,
    marginTop: 10, // Espacio entre el texto adicional y el cuadro estático
    
  },
  
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    
  },
  image: {
    width: 250,
    height: 190,
    borderRadius: 30,
    
  },

  secondStaticbox: {
    width: 341,
    height: 130,
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    marginVertical: 20, // Espacio entre el cuadro y el texto
  },

  secondStaticboxText: {
    color: '#000000', 
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 90, // Espacio entre el texto y el borde superior del cuadro
  },



});

export default Home;