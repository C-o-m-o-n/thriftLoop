import { 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SettingsItem(props) {
  return (
        <TouchableOpacity style={styles.sttItem}>
          <View style={styles.sttItemView}>
          <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
            <Text style={styles.sttItemText}>{props.ItemText}</Text>
          </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    flexDirection:'row',
    
    alignItems:'center',
  },
  itemIcon:{
    color:'teal',
    fontSize:33,
    marginTop:15,
    marginHorizontal:15,
  },
  sttItemText: {
    marginTop:10,
    fontSize:15,
    fontWeight:'400',
  },
  
});
