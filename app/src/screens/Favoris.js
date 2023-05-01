import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { StoreContext } from '../context/storeContext'

const Favoris = () => {
  const {theme} = useContext(StoreContext)
  return (
    <View style={[styles.favoris,{backgroundColor:theme.backgroundColor}]}>
      <Text>Favoris</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  favoris:{
    flex:1,
    padding:15
  }
})

export default Favoris