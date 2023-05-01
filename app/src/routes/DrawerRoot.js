import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../onglets/TabNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StoreContext } from "../context/storeContext";
import Compte from "../screens/Compte";
import Theme from "../screens/Theme";
import Profile from "../components/constants/Profile";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from 'react-native-vector-icons/Feather';
import Material from "react-native-vector-icons/MaterialCommunityIcons";
const Drawer = createDrawerNavigator();
const DrawerRoot = () => {
    const {theme} = useContext(StoreContext)
  return (
    // <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name='Profile' component={Profile} options={{headerShown:true}} />
        <Drawer.Screen name='Home' component={TabNavigation} 
        options={{
          drawerIcon:()=>(<Material name='home' style={{marginRight:-25}}  size={24} />),
          drawerStyle:{
            backgroundColor:theme.backgroundColor,
            }
        }}/>
        
        <Drawer.Screen name='Compte' component={Compte} options={{
          headerShown:true,
          drawerIcon:()=>(<Feather name='user' style={{marginRight:-25}} size={24} />)
        }} />
        <Drawer.Screen name='Theme' component={Theme} options={{
          headerShown:true,
          drawerIcon:()=>(<Material name='sun-thermometer-outline' style={{marginRight:-25}} size={24}/>)
        }}/>
      </Drawer.Navigator>
      
    // </NavigationContainer>


  );
};

export default DrawerRoot;
