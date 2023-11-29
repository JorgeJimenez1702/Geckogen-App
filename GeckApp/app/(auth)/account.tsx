import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { Pressable } from 'react-native';

const Account = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.settings}>Settings</Text>

      <Link href={'/(AccountFunctions)/profileEdit'} asChild>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Ionicons name="person-circle-outline" size={24} color={'#000'} />
            <Text style={styles.buttonText}>Personal information</Text>
            <Ionicons name="chevron-forward" size={24} color={'#000'} />
          </View>
        </TouchableOpacity>
      </Link>

      <Link href={'/(AccountFunctions)/reset'} asChild>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Ionicons name="lock-closed-outline" size={24} color={'#000'} />
            <Text style={styles.buttonText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={24} color={'#000'} />
          </View>
        </TouchableOpacity>
      </Link>

      <Text style={styles.general}>General</Text>

      <Link href={'/(AccountFunctions)/conditions'} asChild>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Ionicons name="book-outline" size={24} color={'#000'} />
            <Text style={styles.buttonText}>Terms & Conditions</Text>
            <Ionicons name="chevron-forward" size={24} color={'#000'} />
          </View>
        </TouchableOpacity>
      </Link>

      <Link href={'/(AccountFunctions)/policy'} asChild>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Ionicons name="shield-checkmark-outline" size={24} color={'#000'} />
            <Text style={styles.buttonText}>Privacy Policy</Text>
            <Ionicons name="chevron-forward" size={24} color={'#000'} />
          </View>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContainer}>
          <Ionicons name="information-circle-outline" size={24} color={'#000'} />
          <Text style={styles.buttonText}>Help</Text>
          <Ionicons name="chevron-forward" size={24} color={'#000'} />
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={doLogout}>
        <View style={styles.logOutContainer}>
          <Ionicons name="log-out-outline" size={24} color={'#000'} />
          <Text style={styles.logOut}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: '#F8F8F8',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logOutContainer: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    width: 72,
    height: 28,
    flexShrink: 0,
    color: '#000',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 20,
  },
  general: {
    width: 328,
    height: 28,
    flexShrink: 0,
    color: '#000',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  logOut: {
    color: '#0076E4',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
  }
});

export default Account;