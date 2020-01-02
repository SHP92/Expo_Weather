import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        icon: 'weather-lightning'
        , color: ['#0F2027', '#203A43', '#2C5364']
    }
    , Drizzle: {
        icon: 'weather-rainy'
        , color: ['#a8c0ff', '#3f2b96']
    }
    , Rain: {
        icon: 'weather-pouring'
        , color: ['#2c3e50', '#3498db']
    }
    , Snow: {
        icon: 'weather-snowy'
        , color: ['#7F7FD5', '#86A8E7', '#91EAE4']
    }
    , Mist: {
        icon: 'weather-fog'
        , color: ['#5D4157', '#A8CABA']
    }
    , Smoke: {
        icon: 'weather-fog'
        , color: ['#232526', '#414345']
    }
    , Haze: {
        icon: 'weather-fog'
        , color: ['#BBD2C5', '#536976']
    }
    , Dust: {
        icon: 'weather-fog'
        , color: ['#2C3E50', '#FD746C']
    }
    , Fog: {
        icon: 'weather-fog'
        , color: ['#F0F2F0', '#000C40']
    }
    , Sand: {
        icon: 'weather-fog'
        , color: ['#544a7d', '#ffd452']
    }
    , Ash: {
        icon: 'weather-fog'
        , color: ['#bdc3c7', '#2c3e50']
    }
    , Squall: {
        icon: 'weather-pouring'
        , color: ['#2b5876', '#4e4376']
    }
    , Tornado: {
        icon: 'weather-hurricane'
        , color: ['#373B44', '#4286f4']
    }
    , Clear: {
        icon: 'weather-sunny'
        , color: ['#1FA2FF', '#12D8FA', '#A6FFCB']
    }
    , Clouds: {
        icon: 'weather-cloudy'
        , color: ['#076585', '#fff']
    }
}

function Weather({ temp, condition, description }) {
    return (
        <LinearGradient 
            style={ styles.gradient }
            colors={ weatherOptions[condition].color }
        >
            <StatusBar barStyle='light-content'/>
            <View style={ styles.halfContainer }>
                <MaterialCommunityIcons 
                    style={ styles.icon } 
                    name={ weatherOptions[condition].icon } 
                    size={150}
                />
                <Text style={ styles.temp }> { temp }℃ </Text>
            </View>
            <View style={ styles.halfContainer }>
                <Text style={ styles.description }> 
                    { description } 
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
    , condition: PropTypes.oneOf([
        'Thunderstorm'
        , 'Drizzle'
        , 'Rain'
        , 'Snow'
        , 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog'
        , 'Sand', 'Ash', 'Squall', 'Tornado'
        , 'Clear'
        , 'Clouds'
    ]).isRequired
    , description: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    halfContainer: {
        flex: 1
        , justifyContent: 'center'
        , alignItems: 'center'
    }
    , gradient: {
        padding: 15
        , alignItems: 'center'
        , borderRadius: 5
        , justifyContent: 'center'
        , flex: 1
    }
    , icon: {
        color: 'white'
    }
    , temp: {
        color: 'white'
        , fontSize: 50
        , fontFamily: 'Verdana'
    }
    , description: {
        fontSize: 45
        , color: 'white'
        , fontFamily: 'Verdana'
    }
})

export default Weather;