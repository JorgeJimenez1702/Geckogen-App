import { Tabs } from 'expo-router';
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
      <Ionicons name="log-out-outline" size={24} color={'#fff'} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (

      <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#000000',
      }}>

      <Tabs.Screen
        name="home"
        options={{
          headerTitle: 'Home',
          headerTitleStyle: { fontSize: 14 },
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
          headerTitleStyle: { fontSize: 14 },
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
          headerTitleStyle: { fontSize: 14 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="ellipse-outline" size={size} color={color} />,
          tabBarLabel: 'Terrarium',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Account',
          headerTitleStyle: { fontSize: 14 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Ionicons name="ellipse-outline" size={size} color={color} />,
          tabBarLabel: 'Account',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;