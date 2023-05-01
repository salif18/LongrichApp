import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Recentes from '../components/constants/Recentes'
import Favorites from '../components/constants/Favorites'
import { NavigationContainer } from '@react-navigation/native'
import { StoreContext } from '../context/storeContext'
import { TabBarIndicator } from 'react-native-tab-view'
const Tab = createMaterialTopTabNavigator()
const TopTabNavigator = () => {
    const {theme} = useContext(StoreContext)
  return (

   <Tab.Navigator
   screenOptions={{
    tabBarStyle:{
      backgroundColor:theme.backgroundColor,
    },
   }}
   >
    <Tab.Screen name='Recentes' component={Recentes}
      tabBarOptions={{
        headerShown:true,
        headerTitleStyle:{color:theme.color}
      }}
    />
    <Tab.Screen name='Favorites' component={Favorites}/>
   </Tab.Navigator>
   
  )
}

export default TopTabNavigator