
import { SafeAreaView, StyleSheet } from 'react-native';
import RickAndMortyCharacters from './screens/reckieMartinService';


export default function App() {

  return (
    <View style={styles.container}>
      <Logo width={600} height={600} />
    </View>
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
 