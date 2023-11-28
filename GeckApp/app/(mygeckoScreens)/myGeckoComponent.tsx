import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


const MyGeckoComponent = (Name: {Name: string}) => {
  return (
    <View>
      <Link
      href={"./(mygeckoScreens)/myGeckoInterface"} asChild>
        <TouchableOpacity style={styles.moduleBox}>
          <Text style={styles.moduleText}>{Name.Name}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
    moduleBox: {
        width: 341,
        height: 84,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        marginVertical: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1
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
});

export default MyGeckoComponent;
