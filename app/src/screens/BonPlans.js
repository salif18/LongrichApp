import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { StoreContext } from '../context/storeContext'

const BonPlans = () => {
  const {theme} = useContext(StoreContext)
  return (
    <View style={[styles.bonplans,{backgroundColor:theme.backgroundColor}]}>
      <Text>BonPlans</Text>
    </View>
  )
}

const styles =StyleSheet.create({
  bonplans:{
    flex:1,
    padding:15
  }
})
export default BonPlans