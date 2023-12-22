import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Navigation'
import PagTemp from './src/pages/PagTemp';



export default function App() {
  return (

    /*<NavigationContainer>
      <Routes />
    </NavigationContainer>
    */
   <PagTemp></PagTemp>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b71bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
