import { StatusBar } from 'expo-status-bar';
import  {React, useState} from 'react';
import { 
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import SideMenu from 'react-native-side-menu-updated'
import thrifty from './/../assets/logo.png';
import market from './/../assets/market.jpg';
import recycle from './/../assets/recycle.jpg';
import donate from './/../assets/donate.jpg';
import Collaborators from './/../assets/undraw_Collaborators_re_hont.png';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={styles.thriftyImgContainer} >
        <Image
          style={styles.thriftyImg}
          source={thrifty} />
      
      <View style={styles.introView}>
         <Text style={styles.introText}>Welcome to thriftLoop, your helper in turning your home appliences into something valuable. hou can ether sell, recycle or donate them. Earn tokens from hour activities which hou can also convert to money</Text>
         <TouchableOpacity>
          <Text>Get started</Text>
         </TouchableOpacity>
      </View>
      </View>
      
      <View style={{backgroundColor:'#bfdde9e7',}} >
        <Image
          style={styles.thriftyImg}
          source={recycle} />
      
      <View style={styles.introView}>
         <Text style={styles.introText}>Welcome to thriftLoop, your helper in turning your home appliences into something valuable. hou can ether sell, recycle or donate them. Earn tokens from hour activities which hou can also convert to money</Text>
         <TouchableOpacity>
          <Text>Get started</Text>
         </TouchableOpacity>
      </View>
      </View>
      
      <View style={{backgroundColor:'#4069e7',}} >
        <Image
          style={styles.thriftyImg}
          source={Collaborators} />
      
      <View style={styles.introView}>
         <Text style={styles.introText}>Welcome to thriftLoop, your helper in turning your home appliences into something valuable. hou can ether sell, recycle or donate them. Earn tokens from hour activities which hou can also convert to money</Text>
         <TouchableOpacity>
          <Text>Get started</Text>
         </TouchableOpacity>
      </View>
      </View>
      
      <View  style={{backgroundColor:'#db9e15b7',}} >
        <Image
          style={styles.thriftyImg}
          source={donate} />
      <View style={styles.introView}>
         <Text style={styles.introText}>Welcome to thriftLoop, your helper in turning your home appliences into something valuable. hou can ether sell, recycle or donate them. Earn tokens from hour activities which hou can also convert to money</Text>
         <TouchableOpacity
         style={{
          marginHorizontal:12,
           backgroundColor:'teal',
           marginTop:10,
           padding:10,
           width:150,
           borderRadius:20,
           
           
         }}
         onPress={()=>navigation.navigate("Login")}>
          <Text style={{
            color:'#fff',
            marginHorizontal:10,
          }}>Get started</Text>
         </TouchableOpacity>
      </View>
      </View>

  
    </ScrollView>
  );
}
//dark mode toggler componenr

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    backgroundColor: '#efefef',
    
  },
  
  thriftyImg: {
    marginTop:20,
    resizeMode: 'contain',
    height: 200,
    width: 300,
    alignSelf:'center',
    marginHorizontal:33,
    borderRadius:10,
  },
  introView:{
    justifyContent:'center',
    alignItem:'center',
    
    margin:3,
  },
  introText:{
    fontWeight:"500",
    padding:2,
  },
});
