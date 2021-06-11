import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderComponent() {
    return (
        <View>
            <Slider
                style={{width: 330, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    )
}
// const styles = StyleSheet.create({
//     Slider: {
    
//     }
// });