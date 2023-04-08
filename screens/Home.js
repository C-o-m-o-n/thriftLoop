import { StatusBar } from 'expo-status-bar';
import  {React, useState} from 'react';
import { 
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import SideMenu from 'react-native-side-menu-updated'
import thrifty from './/../assets/logo.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.thriftyImgContainer} >
        <Image
          style={styles.thriftyImg}
          source={thrifty} />
      </View>

      <View style={styles.introView}>
         <Text style={styles.introText}>Welcome to thriftLoop, your helper in turning your home appliences into something valuable. hou can ether sell, recycle or donate them. Earn tokens from hour activities which hou can also convert to money</Text>
         <TouchableOpacity>
          <Text>Get started</Text>
         </TouchableOpacity>
      </View>

  
    </View>
  );
}
//dark mode toggler componenr

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    backgroundColor: '#efefef',
    
  },
  thriftyImgContainer:{
    flexDirection: 'row',
    padding: 2,
    marginTop:5,
  },
  thriftyImg: {
    resizeMode: 'contain',
    height: 200,
    width: 300,
    alignSelf:'center',
    marginHorizontal:33,
  },
  introView:{
    justifyContent:'center',
    alignItem:'center',
    backgroundColor:'red',
    margin:30,
  },
  introText:{
    fontWeight:"500",
    padding:20,
  },
});
