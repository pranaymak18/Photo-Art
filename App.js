import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SliderComponent from './Component/SliderComponent';
import Header from './Component/Header';
import ImageComp from './Component/Image';
import UploadImage from './Component/UploadImage';
import Editing from './Component/Editing';

const Stack = createStackNavigator();
export default function App() {
  const img= require('./assets/ms-2.png');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UploadImage" >
        <Stack.Screen name="UploadImage" 
        options={{
            title:'Upload Image', 
            headerStyle: {
            backgroundColor: '#292929'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:'center',
            }} 
        component={UploadImage} />

        
        <Stack.Screen name="Editing" 
        options={{
            title:'Upload Image', 
            headerStyle: {
            backgroundColor: '#292929'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:'center',
            }} 
        component={Editing} />
      </Stack.Navigator>
    </NavigationContainer>


    // <View style={styles.container}>
    //   <View><Header /></View>
    //   <View style={styles.contain}>
    //     <View style={styles.viewImage}><ImageBackground source={ img } style={styles.mainImage} /></View>
    //     {/* <ImageComp /> */}
    //     <View style={styles.slider}><SliderComponent /></View>
    //     <View style={styles.menu}><Text>Menu Bar</Text></View>
    //   </View> 
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  contain: {
    flex: 1,
    //backgroundColor: 'orange',
  },
  mainImage: {
    //flex:1,
    //paddingTop: 50,
    width: Dimensions.get("screen").width,
    height: '100%',
    resizeMode: 'contain',
    backgroundColor:'yellow',
  },
  viewImage:{
    flex: 7,
    backgroundColor:'pink',
  },
  slider: {
    flex: 0.5,
    backgroundColor:'black',
  },
  menu: {
    flex:1,
    backgroundColor: 'green',
  }

});
