
import { SafeAreaView, StyleSheet } from 'react-native';
import RickAndMortyCharacters from './lib/reckieMartinService';


export default function App() {

  return (
<<<<<<< HEAD
      <SafeAreaView style={styles.container}>
       <RickAndMortyCharacters />

     </SafeAreaView> 
    
    
=======
    <View style={styles.container}>
      <Logo width={600} height={600} />
    </View>
>>>>>>> 87a44b4c07c281adb68de1456a67d139022cd0d3
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
 