/* import { registerRootComponent } from 'expo';

import App from './App';
import 'react-native-gesture-handler';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RickAndMortyCharacters from './lib/reckieMartinService'; // 👈 NUEVA IMPORTACIÓN

const Stack = createNativeStackNavigator();

import { SafeAreaView, StyleSheet } from 'react-native';
import RickAndMortyCharacters from './lib/reckieMartinService';

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="RickAndMorty"
          component={RickAndMortyCharacters}
          options={{ title: 'Personajes Rick & Morty' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}