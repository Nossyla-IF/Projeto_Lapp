import {SafeAreaView, StyleSheet ,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function PagPrincipal() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar styles='auto' />
            <Image style={{ width: '100%', height: '105%', marginTop: 19 }} source={require('../../assets/placeholder.png')} />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b71bd',
        justifyContent: 'center'

    },
    
})