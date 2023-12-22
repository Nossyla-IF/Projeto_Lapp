import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const PagTemp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather/?q=${location}&lang=pt_br&appid=0da12c02ca839d9d88e58f57e6b1281e`
      );
      setWeatherData(response.data);
      setTemperature(response.data.main.temp - 273.15);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.weatherText}>
            {weatherData.weather[0].description}
          </Text>
        )}

        {temperature && (
          <Text style={styles.temperatureText}>
            Temperatura atual: {temperature.toFixed(2)}°C
          </Text>
        )}
      </View>


    </View>
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
  weatherText: {
    fontSize: 24,
    marginTop: 20,
  },
  temperatureText: {
    fontSize: 24,
    marginTop: 20,
  },
  temp: {
    display: "flex",
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
    backgroundColor: 'black'
  },
});

export default PagTemp;