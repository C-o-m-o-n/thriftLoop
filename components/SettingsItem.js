import { 
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {React, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AccountModal from './/AccountModal'
import ProfileModal from './/ProfileModal'
import OrganizationModal from './/OrganizationModal'
import ItemsModal from './/ItemsModal'
import ReviewModal from './/ReviewModal'
import MarketModal from './/MarketModal'


const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = Dimensions.get('window').height;
export default function SettingsItem(props) {
  const [modalVisible, setModalVisible] = useState(false);
  if (props.ItemText=="Account Settings") {
    return (
    <TouchableOpacity
      onPress={()=>{setModalVisible(!modalVisible)}}
      style={styles.sttItem}
      >
      <View 
        style={styles.sttItemView}
        >
        <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
        <Text style={styles.sttItemText}>{props.ItemText}</Text>
      </View>
      
       <Modal
      transparent={!true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
             <AccountModal/>
        <View style={styles.modalBottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={()=>{
            setModalVisible(!modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}>
          <Text>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </Modal>
    </TouchableOpacity>
  
    );
  } else if (props.ItemText=="Profile Settings") {
    return(
    <TouchableOpacity
      onPress={()=>{setModalVisible(!modalVisible)}}
      style={styles.sttItem}
      >
      <View 
        style={styles.sttItemView}
        >
        <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
        <Text style={styles.sttItemText}>{props.ItemText}</Text>
      </View>
      
       <Modal
      transparent={!true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
             <ProfileModal/>
        <View style={styles.modalBottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={()=>{
            setModalVisible(!modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}>
          <Text>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </Modal>
    </TouchableOpacity>
  
    );
  }else if (props.ItemText=="Items Settings") {
    return(
    <TouchableOpacity
      onPress={()=>{setModalVisible(!modalVisible)}}
      style={styles.sttItem}
      >
      <View 
        style={styles.sttItemView}
        >
        <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
        <Text style={styles.sttItemText}>{props.ItemText}</Text>
      </View>
      
       <Modal
      transparent={!true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
             <ItemsModal/>
        <View style={styles.modalBottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={()=>{
            setModalVisible(!modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}>
          <Text>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </Modal>
    </TouchableOpacity>
  
    );
  }else if (props.ItemText=="Organization Settings") {
    return(
    <TouchableOpacity
      onPress={()=>{setModalVisible(!modalVisible)}}
      style={styles.sttItem}
      >
      <View 
        style={styles.sttItemView}
        >
        <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
        <Text style={styles.sttItemText}>{props.ItemText}</Text>
      </View>
      
       <Modal
      transparent={!true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
             <OrganizationModal/>
        <View style={styles.modalBottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={()=>{
            setModalVisible(!modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}>
          <Text>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </Modal>
    </TouchableOpacity>
  
    );
  }else if (props.ItemText=="Market Settings") {
    return(
    <TouchableOpacity
      onPress={()=>{setModalVisible(!modalVisible)}}
      style={styles.sttItem}
      >
      <View 
        style={styles.sttItemView}
        >
        <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
        <Text style={styles.sttItemText}>{props.ItemText}</Text>
      </View>
      
       <Modal
      transparent={!true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
             <MarketModal/>
        <View style={styles.modalBottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={()=>{
            setModalVisible(!modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}>
          <Text>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </Modal>
    </TouchableOpacity>
  
    );
  }else if (props.ItemText=="Review Settings") {
    return(
    <TouchableOpacity
      onPress={()=>{setModalVisible(!modalVisible)}}
      style={styles.sttItem}
      >
      <View 
        style={styles.sttItemView}
        >
        <Ionicons style={styles.itemIcon} name={props.ItemIcon} />
        <Text style={styles.sttItemText}>{props.ItemText}</Text>
      </View>
      
       <Modal
      transparent={!true}
      animationType='fade'
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
             <ReviewModal/>
        <View style={styles.modalBottom}>
        <TouchableOpacity
          style={styles.bottomBtn}
          onPress={()=>{
            setModalVisible(!modalVisible)}}>
        <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBtn}>
          <Text>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </Modal>
    </TouchableOpacity>
  
    );
  }
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
  modal:{
    width:WIDTH-10,
    height:HEIGHT_MODAL-10,
    paddingTop: 10,
    backgroundColor:'#efefef',
    borderRadius:10,
    marginHorizontal:2,
  },
  modalBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:30,
    marginTop:450,
    
  },
  
});
