import { StyleSheet, Text, View } from 'react-native';

//import Botao from './src/botao/index.js';
import Login from '../Garden/src/login';

export default function App() {
  return (
    

      <View style={styles.container}>
         <Login />
      </View>
       
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
