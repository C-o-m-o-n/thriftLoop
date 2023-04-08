import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View } from 'react-native';

export default function AccountModal() {
  return (
      
      <View >
      <View style={styles.dtl}>
           <Text>AccountModal screen</Text>
           <Text>Name: Collins Omondi</Text>
                <TouchableOpacity
              style={styles.UpdateBtn}
              >
              <Text>Update</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.dtl}>
           <Text>Email: comon928@gmail.com</Text>
                <TouchableOpacity
              style={styles.UpdateBtn}
              >
              <Text>Update</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.dtl}>
           <Text>Pasaword: colr;fmon9d;f28@kkd.;pp</Text>
                <TouchableOpacity
              style={styles.UpdateBtn}
              >
              <Text>Update</Text>
          </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.deleteBtn}>
              <Text>delete Account</Text>
          </TouchableOpacity>
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