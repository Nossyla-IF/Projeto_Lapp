import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



import firebase from '../config/firebaseConfig';

export default function PagCadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const navigation = useNavigation();

    async function Register() {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((value) => {
                firebase.database().ref('User').child(value.user.uid).set({
                    nome: nome
                })
                alert('Usuario ' + nome + ' cadastro com sucesso!')
                navigation.navigate("PagLogin")

            })
            .catch((error) => {
                if (error.code === 'auth/weak-passwoed') {
                    alert('A senha deve ter no minimo 6 digitos!');
                    return;
                }
                if (error.code === 'auth/invalid-email') {
                    alert('E-mail invalido!');
                    return;
                }
                else {
                    alert('Ops Algo deu errada!');
                    return;
                }

            })
        setEmail('');
        setSenha('');
        setNome('');
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar styles='auto' />
            <View style={{ marginTop: -180, marginLeft: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('PagLogin')}>
                    <Ionicons name="arrow-back-circle" size={32} />
                </TouchableOpacity>
            </View>
            <Image style={{ width: 300, height: 300, marginTop: -30, alignSelf: 'center' }} source={require('../../assets/logo.png')} />

            <Text style={styles.texto}>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />

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
                <TouchableOpacity style={styles.btn} onPress={Register}>
                    <Text style={styles.btnText}> CADASTRAR </Text>
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
        marginTop: 60,
        backgroundColor: 'black'

    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },


})