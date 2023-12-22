import { SafeAreaView, StyleSheet, Image, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import firebase from '../config/firebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';




export default function PagPrincipal() {

    const navigation = useNavigation();
    const [opcao, setOpcao] = useState(false)


    if (opcao === true) {
        firebase.auth().signOut(user.email)
            .then((value) => {
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.error('Ocorreu erro')
            })
    }

    async function LogOut() {
        Alert.alert('Logout ', 'Você deseja mesmo fazer logout', [
            {
                text: "Sim", onPress: () => setOpcao(true)
            },
            {
                text: "Não", onPress: () => setOpcao(false)
            },
        ])
    return (
            <SafeAreaView style={styles.container}>
                <StatusBar styles='auto' />
                <Image style={{ width: '100%', height: '105%', marginTop: 19 }} source={require('../../assets/placeholder.png')} />
                <View style={{ marginTop: -180, marginLeft: 20 }}>
                    <TouchableOpacity onPress={LogOut}>
                        <Ionicons name="arrow-back-circle" size={32} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );    
    };

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b71bd',
        justifyContent: 'center'

    },

})