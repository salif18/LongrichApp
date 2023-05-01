import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React ,{useState, useContext} from 'react'
import { StoreContext } from "../../context/storeContext";
import Icon from "react-native-vector-icons/Ionicons";
import LoginForm from './LoginForm';
import RegistreForm from './RegistreForm';


const MyModal = ({modalOpen ,setModalOpen}) => {
    const [login ,setLogin] =useState(false)
    const { theme, sombre } = useContext(StoreContext);
  return (
    
    <Modal animationType="slide" visible={modalOpen}>
    <ScrollView style={[styles.modaltoggle,{backgroundColor:theme.backgroundColor}]}>
      <TouchableOpacity style={styles.headerModal} onPress={()=>setModalOpen(false)}>
      {/* <Icon name='close' size={26}/> */}
      <Text style={{fontSize:18,color:'#fffa'}}>Annule</Text>
      </TouchableOpacity>

     <View style={styles.btnModal}>
     
      {login ? <RegistreForm />:<LoginForm />}
     <TouchableOpacity style={styles.btns} onPress={()=>setLogin(!login)}>
      {login ?<Text style={styles.textBtns}>Login</Text>:<Text style={styles.textBtns}>Signup</Text>}
      </TouchableOpacity>
      
     </View>
     </ScrollView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modaltoggle:{
        flex:1,   
      },
      btnModal:{
        alignItems:'center',
        justifyContent:'space-between'
      },
      headerModal:{
        marginTop:50,
        height:40,
        padding:10,
        borderRadius:20,
        backgroundColor:'#555'
      },
      btns:{
        width:330,
        height:40,
        borderRadius:20,
        backgroundColor:"rgba(10, 160, 35, 0.658)",
        padding:10,
        marginTop:-40
      },
      textBtns:{
        color:'#eeee',
        textAlign:"center",
      }
})
export default MyModal