import { 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import profilePic from './/../assets/robo-head.jpg'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SettingsProfile() {
  return (
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
  );
}