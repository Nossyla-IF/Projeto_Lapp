import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Navigation'



export default function App() {
  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>



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
