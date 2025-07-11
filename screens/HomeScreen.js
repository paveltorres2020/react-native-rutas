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
 
    </View>
 

  );
}
