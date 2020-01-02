import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

function Loading() {
    return (
        <View style={ styles.container }>
            <StatusBar barStyle='dark-content'/>
            <Text style={ styles.text }> Waether App with Expo </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        , justifyContent: 'flex-end'
        , paddingHorizontal: 20
        , paddingVertical: 100
        , backgroundColor: '#FDF6AA'
    }
    , text: {
        color: '#2C2C2C'
        , fontWeight: '300'
        , fontSize: 30
        // , fontFamily: 'apple'
    }
})

export default Loading;