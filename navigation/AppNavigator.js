import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './/../screens/Home'
import Settings from './/../screens/Settings'
import CameraScreen from './/../screens/Items'

import Login from './/../screens/Login'
import OnboardingScreen from './/../screens/OnboardingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({navigation}){
  return(
  <Home navigation={navigation}/>
  )
}
function Onboardingscreen({navigation}){
  return(
  <OnboardingScreen navigation={navigation}/>
  )
}
function Camerascreen ({navigation}){
  return(
  <CameraScreen navigation={navigation} />
  )
}
function SettingsScreen ({navigation}){
  return(
  <Settings navigation={navigation} />
  )
}
function LoginScreen ({navigation}){
  return(
  <Login navigation={navigation} />
  )
}

const Tab = createBottomTabNavigator();



export default function AppNavigator(){
  const [isFirstLounched, setIsFirstLounched] = useState(false)
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(
      value=>{
        if (value === null){
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLounched(true)
        }else{
          setIsFirstLounched(false)
        }
      })
  }, [])
  if (isFirstLounched === null){
    return null
  }else if (isFirstLounched == true) {
    console.log('isFirstLounched');
    return(
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="ThriftLoop" component={Onboardingscreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="rocket" size={20} color="teal" />
        )}} />
    </Tab.Navigator>
 </NavigationContainer>
 );
 
  }else {
    console.log('is not FirstLounched');
   return(
 <NavigationContainer>
    <Tab.Navigator>
         <Tab.Screen name="ThriftLoop" component={Onboardingscreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="rocket" size={20} color="teal" />
        )}} />
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="home" size={20} color="teal" />
        )}} />
      <Tab.Screen name="Login" component={LoginScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="log-in" size={20} color="teal" />
        )}}/>
      <Tab.Screen name="Camera" component={CameraScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="camera" size={20} color="teal" />
        )}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="settings" size={20} color="teal" />
        )}}/>
    </Tab.Navigator>
 </NavigationContainer>
 );
 
}
}