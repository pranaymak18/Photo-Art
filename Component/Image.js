import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

export default function ImageComp() {
    return (
        <View style={styles.container}>
            <Image style={styles.stretch} source={require('../assets/ms.png') } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: Dimensions.get("screen").width,
        height: 500,
        resizeMode: 'contain',
    },
});