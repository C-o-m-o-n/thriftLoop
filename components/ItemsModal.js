import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View } from 'react-native';

export default function ProfileModal() {
  return (
      
      <View >
      <View style={styles.dtl}>
           <Text>items screen</Text>
           
      </View>
      </View>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dtl:{
    width:200,
    borderRadius:23,
    backgroundColor:'green',
    marginHorizontal:46,
  }
});