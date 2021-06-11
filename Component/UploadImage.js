import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage({navigation}) {
    const [image,setImage] = useState(null);
    
    useEffect(() => {
        (async () => {
            
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
                if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);
    
    const handleFileUpload = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            //aspect: [8, 4],
            quality: 1,
        });
        //console.log(result);
        if (!result.cancelled) {
            //setImage(result.uri);
            //console.log(result.uri);
            const imageUrl = result;
            navigation.navigate('Editing', result);
        }

        
    }

    return (
        <View style={styles.container}>
            <View style={styles.welcome}><Text style={styles.selectText}>Welcom to Pranay Makwana Photo Editing App</Text></View>
            <View style={styles.select}>
            <Text style={styles.selectText}>Select Image</Text>
            <TouchableWithoutFeedback onPress={handleFileUpload}>
                <MaterialCommunityIcons name="image-edit-outline" size={100} color="black" />
            </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#d3d3d3'
    },
    welcome:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    select:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    selectText:{

        fontWeight: 'bold',
        fontSize: 35,
        textAlign:'center'
        
    }
})
