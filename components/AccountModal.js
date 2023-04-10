import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  View } from 'react-native';
import thrifty from './/../assets/logo.png';

export default function AccountModal() {
  return (
      
      <View style={styles.container}>
      <View style={styles.thriftyImgContainer} >
        <Image
          style={styles.thriftyImg}
          source={thrifty} />
      </View>
        <View style={styles.txt}>
           <Text>My first text</Text>
        </View>

        <TouchableOpacity style={styles.deleteBtn}>
              <Text>delete Account</Text>
          </TouchableOpacity>
      </View>
    
      
  );
}

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
    marginTop:150,
  },
  txt:{
    color:'red',
  },
  thriftyImg: {
    resizeMode: 'contain',
    height: 200,
    width: 300,
    alignSelf:'center',
    marginHorizontal:33,
  },
  dtl:{
    width:200,
    borderRadius:23,
    backgroundColor:'green',
    marginHorizontal:46,
  }
});