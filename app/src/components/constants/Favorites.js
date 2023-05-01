import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'

const Favorites= () => {
  const {theme} = useContext(StoreContext)
  return (
    <View style={[styles.favorite,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[{color:theme.color}]}>Les Favorites</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   favorite:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   }
})
export default Favorites