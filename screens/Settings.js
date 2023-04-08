import { StatusBar } from 'expo-status-bar';
import {React, useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Alert,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import profilePic from './/../assets/robo-head.jpg'
import SettingsItem from './/../components/SettingsItem'
import SettingsProfile from './/../components/SettingsProfile'

export default function Settings({navigation}) {
  
  return (
    <View style={styles.container}>
      <ScrollView>
      
      <View style={styles.profilecontainer}>
      
        <View style={styles.profilePicContainer}>
             <Image
                style={styles.profilePic}
                source={profilePic} />
           <Text style={{marginHorizontal:20,fontWeight:'500',}}>Collins Omondi</Text>
        </View>
        <View style={styles.activity}>
        <Ionicons
          name="analytics"
          size={42}
          color="teal"
          style={styles.activityIcon}/>
           <Text style={styles.activityTxt}>donated</Text>
           <Text style={styles.activityNum}>65</Text>
        </View>
        <View style={styles.activity}>
         <Ionicons
          name="sync"
          size={42} color="teal"
          style={styles.activityIcon}/>
           <Text style={styles.activityTxt}>recycled</Text>
           <Text style={styles.activityNum}>45</Text>
        </View>
        <View style={styles.activity}>
           <Ionicons
            name="cash-outline"
            size={42}
            color="teal"
            style={styles.activityIcon}/>
           <Text style={styles.activityTxt}>Sold</Text>
           <Text style={styles.activityNum}>98</Text>
        </View>
      </View>

      <View style={{margin:8,}}>
      </View>
      
        <SettingsItem ItemIcon="infinite" ItemText="Account Settings"/>
        <SettingsItem ItemIcon="person" ItemText="Profile Settings"/>
        <SettingsItem ItemIcon="umbrella" ItemText="Items Settings"/>
        <SettingsItem ItemIcon="earth" ItemText="Organization Settings"/>
        <SettingsItem ItemIcon="fast-food" ItemText="Market Settings"/>
        <SettingsItem ItemIcon="star-half" ItemText="Review Settings"/>
        
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilecontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    marginHorizontal:5,
  },
  profilePic:{
    alignItems:'center',
    margin:15,
    width:100,
    height:100,
    borderRadius:50,
  },
  activity:{
    margin:3,
    border:2,
    paddingTop:16,
    marginTop:16,
    paddingHorizontal:5,
    backgroundColor:'#efefef',
    borderRadius:10,
  },
  activityIcon:{
    marginHorizontal:5,
  },
  activityTxt:{
    marginHorizontal:4,
    fontSize:15,
    fontWeight:'500',
  },
  activityNum:{
    marginHorizontal:17,
    fontSize:20,
    fontWeight:'500',
  },
  
});
