import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './/../screens/Home'
import Settings from './/../screens/Settings'

import Login from './/../screens/Login'
import OnboardingScreen from './/../screens/OnboardingScreen'


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
  return(
 <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="home" size={20} color="teal" />
        )}} />
      <Tab.Screen name="Onboarding" component={Onboardingscreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="rocket" size={20} color="teal" />
        )}} />
      <Tab.Screen name="Login" component={LoginScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="log-in" size={20} color="teal" />
        )}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon: ({ tintColor }) => (
          <Ionicons name="settings" size={20} color="teal" />
        )}}/>
    </Tab.Navigator>
 </NavigationContainer>
 );
}