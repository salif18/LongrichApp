import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import {StoreContext} from '../../context/storeContext'
const Recentes = () => {
  const {theme} = useContext(StoreContext)
  return (
    <View style={[styles.recentes,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[{color:theme.color}]}>Propiete</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  recentes:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },

})
export default Recentes