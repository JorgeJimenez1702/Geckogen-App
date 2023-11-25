import { Link, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#000'} />
    </Pressable>
  );
};

export const AddButton = () => {

  return (
    <Link href={"/(TerrariumFunctions)/AddTerrarium"} asChild>
      <Pressable style={{ marginRight: 15 }}>
        <Ionicons name="add-circle-outline" size={28} color={'#0076E4'} />
      </Pressable>
    </Link>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (

    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F8F8F8',
        },
        headerTintColor: '#000000',
      }}>

      <Tabs.Screen
        name="home"
        options={{
          headerTitle: 'Home',
          headerTitleStyle: { fontSize: 16, color: '#000', fontStyle: 'normal', fontWeight: '400', lineHeight: 25, letterSpacing: -0.4 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="ellipse-outline" size={size} color={color} />,
          tabBarLabel: 'Home',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="mygecko"
        options={{
          headerTitle: 'My Gecko',
          headerTitleStyle: { fontSize: 16, color: '#000', fontStyle: 'normal', fontWeight: '400', lineHeight: 25, letterSpacing: -0.4 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="ellipse-outline" size={size} color={color} />,
          tabBarLabel: 'My Gecko',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="terrarium"
        options={{
          headerTitle: 'Terrarium',
          headerTitleStyle: { fontSize: 16, color: '#000', fontStyle: 'normal', fontWeight: '400', lineHeight: 25, letterSpacing: -0.4 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="analytics" size={size} color={color} />,
          tabBarLabel: 'Terrarium',
          headerRight: () => <AddButton />
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerTitle: 'Account',
          headerTitleStyle: { fontSize: 16, color: '#000', fontStyle: 'normal', fontWeight: '400', lineHeight: 25, letterSpacing: -0.4 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" size={size} color={color} />,
          tabBarLabel: 'Account',
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;