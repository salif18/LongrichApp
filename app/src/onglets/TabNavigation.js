import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Messages from "../screens/Messages";
import Reglages from "../screens/Reglages.js";
import Buy from "../screens/Buy";
import { StoreContext } from "../context/storeContext";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { profileData } from "../data/ProfileData";
import SearchInput from "../components/home/SearchInput";
import Header from "../components/constants/Header";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const { cart, messages, theme, sombre } = useContext(StoreContext);
  const navigation = useNavigation();
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle:{backgroundColor:theme.backgroundColor},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackground: () => (
            <>
            {/* <Header/> */}
              <View
                style={{
                  backgroundColor:sombre ? theme.backgroundColor: "rgba(10, 160, 35, 0.658)",
                  height: 90,
                }}
              />
              
              <View style={styles.fieldInput}>
               <TouchableOpacity style={styles.btnMenu} onPress={()=>navigation.openDrawer()} 
               >
                <Ionicons name='menu' size={30} />
               </TouchableOpacity>
                <Image
                  style={styles.img}
                  source={require("../../assets/logo.png")}
                />
                <Text style={styles.titleText}>hadja</Text>
              </View>
            </>
          ),
          headerRight: (color) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push("Cart");
              }}
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
          tabBarLabel: "Home",
          tabBarIcon: () => <Octicons name="home" size={26} color="gray" />,
        }}
      />

      <Tab.Screen
        name="search"
        component={Search}
        options={{
          
          tabBarLabel: "Search",
          tabBarIcon: () => <Ionicons name="search" size={26} color="gray" />,
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Messages}
        
        options={{
          headerTitleStyle:{color:theme.color},
          headerBackground:()=>(<View style={{backgroundColor:theme.backgroundColor,height:100,color:theme.color}}/>),
          tabBarBadge: messages.length,
          headerShown: true,
          tabBarLabel: "Messages",
          tabBarIcon: () => (
            <Icon name="message-circle" size={26} color="gray" />
          ),
        }}
      />

      <Tab.Screen
        name="Mes Achats"
        component={Buy}
        options={{
          headerShown: true,
          headerTitleStyle:{color:theme.color},
          headerBackground:()=>(<View style={{ backgroundColor: theme.backgroundColor, color:theme.color, height: 100 }}></View>),
          tabBarLabel: "Mes achats",
          tabBarIcon: () => (
            <SimpleLineIcons name="social-dropbox" size={26} color="gray" />
          ),
        }}
      />

      <Tab.Screen
        name="Reglages"
        component={Reglages}
        options={{
          headerShown: true,
          title: "",
          headerBackground: () => (
            <>
              <View style={{ backgroundColor: theme.backgroundColor, height: 100 }}></View>
              <TouchableOpacity
                style={styles.profInfos}
                onPress={() =>
                  navigation.navigate("Modifier profile", { profileData })
                }>
                <Image
                  style={styles.imag}
                  source={{ uri: `${profileData.image}` }}
                />
                <Text style={[styles.name,{color:theme.color}]}>{profileData.nom}</Text>
              </TouchableOpacity>
            </>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                navigation.navigate("Cart");
              }}>
              <Ionicons name="cart-outline" size={26} />
            </TouchableOpacity>
          ),
          tabBarLabel: "Reglages",
          tabBarIcon: () => (
            <Ionicons name="md-cog-outline" size={26} color="gray" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  fieldInput: {
    marginTop: -25,
    flexDirection: "row",
    marginRigth: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    borderWidth: 1,
    borderColor: "#fff",
    width: 50,
    height: 35,
    marginTop: -15,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  img: {
    width: 35,
    height: 35,
    marginTop: -15,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
  },
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
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeef",
  },
  profInfos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 5,
    marginTop: 9,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  imag: {
    marginTop: -60,
    marginBottom: 40,
    marginLeft: -140,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    marginTop: -50,
    marginBottom: 40,
    marginLeft: 10,
    fontWeight: 600,
  },
  btnMenu:{
    marginTop:-10
  }
});
export default TabNavigation;
