import { StatusBar } from 'expo-status-bar';
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
      <View>
         <Text>My first text</Text>
         <Text>My first text</Text>
         <Text>My first text</Text>
      </View>
  
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
  },
  thriftyImg: {
    resizeMode: 'contain',
    height: 200,
    width: 300,
    alignSelf:'center',
    marginHorizontal:33,
    
  },
  
});
