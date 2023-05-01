import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import TabNavigation from "../onglets/TabNavigation";
import Acceuil from "../screens/Acceuil";
import Cart from "../screens/Cart";
import Category from "../screens/Category";
import Favoris from "../screens/Favoris";
import BonPlans from "../screens/BonPlans";
import SingleProd from "../screens/SingleProd";
import Icon from "react-native-vector-icons/Feather";
import Conversations from "../screens/Conversations";
import ProfileScreen from "../screens/ProfileScreen";
import Compte from "../screens/Compte";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StoreContext } from "../context/storeContext";
import Theme from "../screens/Theme";
import { profileData } from "../data/ProfileData";
import Ionicons from "react-native-vector-icons/Ionicons";
import DrawerRoot from "./DrawerRoot";
import TopTabNavigator from "../onglets/TopTabNavigator";
import Confirmation from "../screens/Confirmation";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  const { cart,theme } = useContext(StoreContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="start"
        screenOptions={{ 
          headerShown: false,
          headerBackTitle:''
          }}>
        <Stack.Screen name="start" component={Acceuil} />
        <Stack.Screen name='drawer' component={DrawerRoot} /> 
        <Stack.Screen name="tab" component={TopTabNavigator} />
       
        {/* <Stack.Screen name="tab" component={TabNavigation} /> */}
        
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerTitleStyle:{color:theme.color},
            headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor,height:95}} />),
            headerRight: (color) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                  marginRight: 15,
                }}>
                <View style={styles.cartCont}>
                  <Icon name="shopping-cart" color={color} size={25} />
                  {cart.length > 0 && (
                    <View style={styles.radiu}>
                      <Text style={styles.len}>{cart.length}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ),
            // headerBackground:()=>(<View style={{backgroundColor:'rgba(10, 160, 35, 0.658)',height:100}} />),
            // headerRight:(color,size)=>(<View style={{backgroundColor:'#fff',height:40,width:40,borderRadius:100}}><Icon style={{padding:7}} name='shopping-cart' color={color} size={26} /></View>)
          }}
        />
        <Stack.Screen
          name="Favoris"
          component={Favoris}
          options={{
            headerShown: true,
            headerTitleStyle:{color:theme.color},
            headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor, height:95}} />)
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ headerShown: true,
            headerTitleStyle:{color:theme.color},
            headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor, height:95}} />)
           }}
        />
        <Stack.Screen
          name="Bonplans"
          component={BonPlans}
          options={{ 
            headerShown: true,
            headerTitleStyle:{color:theme.color},
            headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor, height:95}} />)
           }}
        />
        <Stack.Screen name="Details" component={SingleProd} />
        <Stack.Screen
          name="Conversations"
          component={Conversations}
          options={{
             headerShown: true ,
             headerTitleStyle:{color:theme.color},
             headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor,height:90}} />)
             }}
        />
        <Stack.Screen
          name="Modifier profile"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Compte"
          component={Compte}
          options={{ 
            headerShown:true,
            headerTitleStyle:{color:theme.color},
            headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor, height:95}} />)
          }}
        />
        <Stack.Screen
          name="Theme"
          component={Theme}
          options={{ 
            headerShown: true,
            title: "Apparence",
            headerTitleStyle:{color:theme.color},
          headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor, height:95}} />)
        }}
        />
        <Stack.Screen name='Confirmation' component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  len: {
    padding: 1,
  },
  radiu: {
    position: "relative",
    top: -30,
    right: -20,
    borderRadius: 5,
    paddingLeft: 5,
    borderRadius: 100,
    backgroundColor: "orange",
    width: 20,
    height: 20,
  },
  cartCont: {
    width: 40,
    height: 40,
    padding: 7,
    borderRadius: 100,
    backgroundColor: "white",
    marginRight: -20,
  },
});

export default Routes;
