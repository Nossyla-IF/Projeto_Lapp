import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


import firebase from '../config/firebaseConfig';

export default function Paglogin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState('');
    const navigation = useNavigation();


    async function Login() {
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((value) => {
                alert('Bem-Vindo ' + value.user.email);
                setUser(value.user.email);
                navigation.navigate("PagTemp")

            })
            .catch((error) => {
                alert('Ops algo deu errado!!');
                return;

            })
        setEmail('');
        setSenha('');
    }



    async function LogOut() {
        await firebase.auth().signOut();
        alert("Logout realizado com sucesso!");
        setUser('')
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
            <Text style={styles.texto}>Senha</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(texto) => setSenha(texto)}
                value={senha}
            />
            <View style={{
                height: 50, width: '100%', alignItems: 'center',
                justifyContent: 'center', marginBottom: 15
            }}>
                <TouchableOpacity style={styles.btn} onPress={Login}>
                    <Text style={styles.btnText}> Logar </Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 22, marginTop: 40, marginBottom: 20, textAlign: 'center' }}>
                {user}
            </Text>
            <View style={{
                height: 50, width: '100%', alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity style={styles.btnCas} onPress={() => navigation.navigate('PagCadastro')}>
                    <Text style={styles.btnCasText}>Não tem cadastro? Clique aqui</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                height: 50, width: '100%', alignItems: 'center',
                justifyContent: 'center', marginBottom: 15
            }}>
                <TouchableOpacity style={styles.btnCas} onPress={() => navigation.navigate('Redefinir_Senha')}>
                    <Text style={styles.btnCasText}>Esqueceu a senha? Clique aqui</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
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