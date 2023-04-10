import { StatusBar } from 'expo-status-bar';
import {React, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

let users = [
  {
    "id":1,
    "email":'comon928@gmail.com',
    "password":'12345678',
  },
  
  ]

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function onPress(){
    navigation.navigate("Home")
  }
  const handleSignup = () =>{
    users.push({'id':users.length+1, 'email':email, 'password':password})
    users=users
    console.log('added');
    console.log(users);
  }

 return (

    <KeyboardAvoidingView
      style={styles.container}
      behaviour="padding"
      >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputOutline}
          placeholder="Email"
          value={email}
          onChangeText={text=> setEmail(text)}
          />
        <TextInput
          style={styles.inputOutline}
          placeholder="Password"
          value={password}
          onChangeText={text=> setPassword(text)}
          secureTextEntry
          />
      </View>
      <View
        style={styles.buttonContainer} >
        <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={styles.buttonOutlineText}>
            Login
         </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignup}
          style={styles.button}
        >
          <Text
            style={styles.buttonOutlineText}>
            Register
         </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight:'bold',}}>or</Text>
          <TouchableOpacity onPress={onPress} style={styles.googleContainer}>
              <Ionicons
                name="logo-google"
                size={32}
                color="red"
                style={styles.activityIcon}/>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width: '80%',
  },
  inputOutline:{
    backgroundColor:'#fff',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:10,
  },
  buttonContainer:{
    
    flexDirection:'row',
    justifyContent:'center'
  },
  button:{
    backgroundColor:'teal',
    margin:10,
    marginTop:20,
    width:'35%',
    padding:10,
    borderRadius:10,
  },
  buttonOutlineText:{
    marginHorizontal:30,
    fontWeight:'400',
    color:'#fff',
  },
  googleContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    flexDirection:'row',
    alignSelf:"center",
    width:290,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:20,
  },
  googleButtonText: {
    fontSize: 18,
    marginHorizontal:15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    
  },
});
