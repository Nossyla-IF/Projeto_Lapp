import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth();

export default function Redefinir_Senha() {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    async function Redefinir_Senha() {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert("Email enviado com sucesso!");
                // ..
                setTimeout(() => { navigation.navigate("PagLogin") }, 1200);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Email invalido');
                // ..
            });

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar styles='auto' />
            <Image style={{ width: 300, height: 300, alignSelf: 'center', marginTop: -70 }} source={require('../../assets/logo.png')} />

            <Text style={styles.texto}>E-mail</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setEmail(texto)}
                value={email}
            />
            <View style={{
                height: 60, width: '100%', alignItems: 'center',
                justifyContent: 'center', marginBottom: 15
            }}>
                <TouchableOpacity style={styles.btnCas} onPress={Redefinir_Senha}>
                    <Text style={styles.btnCasText}>Redefinir Senha</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>)


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b71bd',
        justifyContent: 'center'

    },
    texto: {
        fontSize: 20,
        paddingLeft: 11.1,
        paddingTop: 8


    },
    input: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 17,
        borderRadius: 5
    },
    btn: {
        width: '80%',
        height: 50,
        alignItens: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderRadius: 25,
        marginTop: 40,
        backgroundColor: 'black'

    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnCas: {

        width: '55%',
        height: 20,
        alignItens: 'center',
        justifyContent: 'flex-end',
        borderColor: 'red',
        borderRadius: 25,
        marginTop: 20,
        backgroundColor: 'black',
        top: 18
    },
    btnCasText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',

    }

})