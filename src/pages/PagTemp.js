import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const PagTemp = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [feelsLike, setFeelLike] = useState(null);


    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather/?q=${location}&lang=pt_br&appid=0da12c02ca839d9d88e58f57e6b1281e`
            );
            setWeatherData(response.data);
            setTemperature(response.data.main.temp - 273.15);
            setHumidity(response.data.main.humidity);
            setFeelLike(response.data.main.feels_like - 273.15);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <Image style={{ width: 300, height: 300, alignSelf: 'center', bottom:25 }} source={require('../../assets/logo.png')} />

            <TextInput
                style={styles.input}
                placeholder="Digite o nome da cidade"
                onChangeText={setLocation}
                placeholderTextColor='#dad9d9'
            />
            <TouchableOpacity style={styles.btn} onPress={fetchWeatherData}>
                <Text style={styles.btnText}> Procurar </Text>
            </TouchableOpacity>

            <View style={styles.temp}>
                {weatherData && (
                    <Text style={styles.text}>
                        Clima: {weatherData.weather[0].description}
                    </Text>
                )}

                {temperature && (
                    <Text style={styles.text}>
                        Temperatura atual: {temperature.toFixed(2)}°C
                    </Text>
                )}

                {humidity && (
                    <Text style={styles.text}>
                        Umidade: {humidity}%
                    </Text>
                )}
                {feelsLike && (
                    <Text style={styles.text}>
                        Sensação Termica: {feelsLike.toFixed(2)}°C
                    </Text>
                )}
            </View>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9b71bd',
        fontSize: 50,
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 2,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 17,
        borderRadius: 5,
        bottom: 40,
        marginBottom:140,
        color:'white',
    },
    
    text: {
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
    
    },
    temp: {
        bottom: 100,
        backgroundColor: "white",
        borderRadius: 5,
        width: "85%" ,
        paddingLeft: 30,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btn: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderRadius: 25,
        marginTop: 40,
        backgroundColor: 'black',
        bottom: 150,

    },
});

export default PagTemp;