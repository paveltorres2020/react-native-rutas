import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RickAndMortyCharacters from './screens/reckieMartinService';
import EpisodesScreen from './screens/EpisodesScreen';
import EpisodeDetailScreen from './screens/EpisodeDetailScreen';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Acerca de' }} />
        <Stack.Screen name="RickAndMorty" component={RickAndMortyCharacters} options={{ title: 'Rick & Morty' }} />
        <Stack.Screen  name="Episodes"  component={EpisodesScreen}  options={{ title: 'Detalle del Episodio' }}/>
        <Stack.Screen  name="EpisodeDetail"  component={EpisodeDetailScreen}  options={{ title: 'Detalle del Episodio' }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Main);
