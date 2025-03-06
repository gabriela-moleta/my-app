import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#ddd',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}