import React from 'react';
import { View, Text, Button } from 'react-native';
/*import { SafeAreaView, StyleSheet } from 'react-native';
import RickAndMortyCharacters from './lib/reckieMartinService';
*/
export default function HomeScreen({ navigation }) {
  return (
     <View>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ir a Perfil" onPress={() => navigation.navigate('Profile')} />
       <Button  title="Ver personajes de Rick & Morty"  onPress={() => navigation.navigate('RickAndMorty')}/>
      <Button  title="Ver Episodio 1"  onPress={() => navigation.navigate('Episodes', { episodeNumber: 1 })}
/>

    </View>
 

  );
}
