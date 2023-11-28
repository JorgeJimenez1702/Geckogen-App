import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import PagerView from 'react-native-pager-view';
import {SimpleLineIcons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';


type CarouselItemProps = {
  imageUrl: string;
  url: string;
  textBelowImage: string;
};


const CarouselItem: React.FC<CarouselItemProps> = ({ imageUrl, url, textBelowImage }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <View style={styles.page}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textBelowCarousel}>{textBelowImage}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <SimpleLineIcons name="arrow-right" size={40} color="#000000" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const { user } = useUser();

  const carouselItems = [
    {
      imageUrl: 'https://files.stripe.com/links/MDB8YWNjdF8xTzIxRkFBSlRlTUwyOVpVfGZsX3Rlc3Rfc3hFN09OcUI4VE1TU0JLY3hHSEptb3pW00wPp8U5md',
      url: 'https://geckogen-web-app.vercel.app/shop/product/prod_P3dqsxunfez7bg',
      textBelowImage: 'Full Pin Extreme C19',
    },
    {
      imageUrl: 'https://files.stripe.com/links/MDB8YWNjdF8xTzIxRkFBSlRlTUwyOVpVfGZsX3Rlc3RfMjB3YW1zUUFwOVE2R3RLMnNoTkJZam1W002iG28foG',
      url: 'https://geckogen-web-app.vercel.app/shop/product/prod_P3dFNDH77Hs7Og',
      textBelowImage: 'Red Stripe G24',
    },
    {
      imageUrl: 'https://files.stripe.com/links/MDB8YWNjdF8xTzIxRkFBSlRlTUwyOVpVfGZsX3Rlc3RfZmwwVnZLUmlCRFVYUXF5M0hjNHAxTm1Z008grQs0rE',
      url: 'https://geckogen-web-app.vercel.app/shop/product/prod_P3cqKug3rGhkgZ',
      textBelowImage: 'Wide Back F G11',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user?.firstName}!</Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://geckogen-web-app.vercel.app/#DNA')}>
        <View style={styles.staticBox}>
          <Image
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/16ea/4b4f/1acd1c27f4de2c8f31a1450155cc5d5a?Expires=1702252800&Signature=Q~yan8MJx4WIUlEqZ-h8cjOE1eFOtiJjWHo6bqcxYzcOpRrqK5KRP7RH63Nf8uDryyCuC7Y7H9~gwxvrxqX7Y85pl54uSen4TEDlb7aaIhPKKf5pmuns5OzSFUmf~Npix1SnOURaABJgk24S6SKQeSo-pHhBJuXFUvbIPKYnIqLL1~CHndavhbx3iTzmjXHkOei61SZ9vGzCpV6niUfMgOnq1mXhWU~vyAmKYMwkA0hXa97IGAYn1YGBTOLCSEoKVCWLHiUC39Iboiyh5j7gUIF0RxeSa8lkmNF6HAlm~uR4rNCGxc372dibACeeca8eObBiCDAjpAhVe2DaLhgI7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.staticBoxImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.staticBoxText}>Get your gecko genome</Text>
            <Text style={styles.secondStaticboxText}>DNA Sequencing services</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.additionalText}>New featured products</Text>

      <PagerView style={styles.pagerView} initialPage={0}>
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={index}
            imageUrl={item.imageUrl}
            url={item.url}
            textBelowImage={item.textBelowImage}
          />
        ))}
      </PagerView>

      <TouchableOpacity onPress={() => Linking.openURL('https://geckogen-web-app.vercel.app/#footer ')}>
        <View style={styles.secondStaticbox}>
          <Image
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/69f8/213e/a2979f5f2e403cf9e37cffa8429717c8?Expires=1702252800&Signature=f49Ap3RyVtF7mT3qMq7LjoONOBBhRsxo2HknBZum9ckxJbxeyciVeACzqkUMznstjiC8a77Actr-icTlAQQHtQfHq3eoLFw9MT6CloWW5Fo9zSxlz9Vo49wanm15RbJGdXarO~DbcwNVItn7gLeQg0rACPZCMYaADt5vUXDaa53Wo4LMP463GXrpGNQ0rn~xKZ6wV1F~FCjB3PZYkVIJ9fckzp6sUHlgmOrr859SIlAJpuq8ykWiSFMBJHzEQ8kAVzeIdKy4-lPSd6XPN0CfcqzY1SRnnLI7rU0uuMLno6~TjzS3enS59wdQZEBP2eh84FGZJvLe60nHFokMLhPqEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.secondStaticboxImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.secondStaticboxText}>New advances in genetics</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

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
    position: 'relative',
    width: 341,
    height: 193,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: 20,
  },

  overlay: {
    position: 'absolute',
    top: '80%',
    left: 0,
    right: 0,
    textAlign: 'center',
  },

  staticBoxText: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'normal',
    textAlign: 'left',
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: -10,
  },

  additionalText: {
    color: '#000000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  pagerView: {
    flex: 1,
    marginTop: 5,
  },

  page: {
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    height: 180,
    borderRadius: 30,
    width: windowWidth - 140,
    right: 35,
  },

  secondStaticbox: {
    position: 'relative',
    width: 341,
    height: 130,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: 20,
  },

  secondStaticboxText: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'normal',
    textAlign: 'left',
    paddingHorizontal: 20,
    marginTop: -10,
  },

  arrowContainer: {
      position: 'absolute',
      right: -5, 
      bottom: 100, 
      alignItems: 'center',
  },

  staticBoxImage: {
    width: 341,
    height: 193,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: -1,
  },

  secondStaticboxImage: {
    width: 341,
    height: 130,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginVertical: -1,
  },
  
  imageTouchable: {
    borderRadius: 30,
  },

  textBelowCarouselContainer: {
    left: 20,
    marginBottom: -50,
  },

  textBelowCarousel: {
    fontSize: 16,
    color: '#000000',
    right: 70,
  },
  textContainer: {
    marginBottom: 10, 
  },
});

export default Home;