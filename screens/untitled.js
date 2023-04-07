import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import profilePic from './/../assets/robo-head.jpg'
export default function Settings() {
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
        <Ionicons name="analytics-outline" size={42} color="teal" />
           <Text style={styles.activityTxt}>donated</Text>
           <Text style={styles.activityNum}>65</Text>
        </View>
        <View style={styles.activity}>
         <Ionicons name="refresh-outline" size={42} color="teal" />
           <Text style={styles.activityTxt}>recycled</Text>
           <Text style={styles.activityNum}>45</Text>
        </View>
        <View style={styles.activity}>
           <Ionicons name="cash-outline" size={42} color="teal" />
           <Text style={styles.activityTxt}>sold</Text>
           <Text style={styles.activityNum}>98</Text>
        </View>
         
      </View>
        <TouchableOpacity style={styles.sttItem}>
          <View style={styles.sttItemView}>
            <Text style={styles.sttItemText}>Account Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sttItem}>
          <View style={styles.sttItemView}>
            <Text style={styles.sttItemText}>Ptofile Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sttItem}>
          <View style={styles.sttItemView}>
            <Text style={styles.sttItemText}>Items Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sttItem}>
          <View style={styles.sttItemView}>
            <Text style={styles.sttItemText}>Market Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sttItem}>
          <View style={styles.sttItemView}>
            <Text style={styles.sttItemText}>Review</Text>
          </View>
        </TouchableOpacity>
        
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
  activityTxt:{
    margin:2,
    fontSize:15,
    fontWeight:'500',
  },
  activityNum:{
    marginHorizontal:15,
    fontSize:15,
    fontWeight:'500',
  },
  sttItem:{
    marginTop:10,
    height:70,
    marginHorizontal:20,
    paddingHorizontal:15,
    backgroundColor:'#efefef',
    borderRadius:6,
    width:330,
  },
  sttItemView:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
  },
  sttItemText: {
    marginTop:20,
    fontSize:15,
    fontWeight:'400',
  },
});
