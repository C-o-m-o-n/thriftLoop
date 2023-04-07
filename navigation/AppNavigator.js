import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './/../screens/Home'
import Settings from './/../screens/Settings'
import Login from './/../screens/Login'


function HomeScreen(){
  return(
  <Home />
  )
}
function SettingsScreen (){
  return(
  <Settings />
  )
}
function LoginScreen (){
  return(
  <Login />
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