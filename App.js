import React from 'react';
import Loading from './Loading.js';
import Weather from './Weather.js';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '723b55b651e410173e3830f0cc8bc3eb';

class App extends React.Component {
  state = {
    isLoading: true
  }

  async getLocation() {
    try {
      await Location.requestPermissionsAsync();
      let { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch {
      Alert.alert('Acess for loaction DENIED');
    }   
  }
  async getWeather(lat, lon) {
    const { data : { main, weather }} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`);
    this.setState({ 
      isLoading: false
      , temp: main.temp
      , condition: weather[0].main
      , description: weather[0].description
    });
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, description } = this.state;
    return (
      isLoading ? <Loading /> : <Weather 
        temp={ Math.round(temp) } 
        condition={ condition }
        description={ description }
      />
    )
  }
}

export default App;