import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import React, { useContext, useState } from "react";
import CartItem from "../components/constants/CartItem";
import { StoreContext } from "../context/storeContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'

const URI =`http://192.168.1.17:3001/orders`;
const headers = {'Content-Type':'application/json'}
const address='Bamako, Attbougou 320 lgts, Rue: 597, Porte: 104 '

const Cart = () => {

const { cart,setCart, amount, theme,userId, orders, setOrders} = useContext(StoreContext);
const navigation = useNavigation();

 //Commande
 const sendOrders =()=>{
  axios
  .post(URI,{userId:userId, cart, orders, amount:amount, address:address },headers)
  .then(res => res.data)
  .catch(err => console.log(err))
  setOrders([...cart , amount])
  cart.length > 0 && navigation.navigate('Confirmation')
  setCart([])
}

  return (
    <View style={[styles.cart, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.lengthCart}>
        {cart.length === 0 && (
          <View style={styles.paniEtat}>
            <Icon name="cart" size={50} color="gray" />
            <Text style={[styles.textAlert, { color: theme.color }]}>
              Votre panier est vide, il est temps de le remplir !!
            </Text>
          </View>
        )}
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <CartItem item={item} />
          </View>
        )}
      />
      <View style={[styles.footer, { backgroundColor: theme.barre }]}>
        <Text style={[styles.montant, { color: theme.color }]}>
          <Icon color={theme.color} name="calculator" size={30} /> Montant :{" "}
          {amount} Fcfa <Icon name="" />
        </Text>
        <TouchableOpacity style={styles.btnByu} onPress={()=>sendOrders()}>
          <Text style={styles.text}>Envoyer à la boutique</Text>
          <Icon name="cart-variant" color="#fff" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    backgroundColor: "#fffa",
  },
  cartItem: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  btnByu: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    padding: 10,
    height: 45,
    borderRadius: 15,
    backgroundColor: "orange",
    marginHorizontal: 12,
    marginVertical: 50,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    marginRight: 10,
    color: "#fff",
  },
  montant: {
    paddingTop: 20,
    paddingLeft: 20,

    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#fff",
  },
  lengthCart: {
    padding: 15,
  },
  textAlert: {
    fontSize: 16,
    fontWeight: 400,
    margin: 10,
  },
  paniEtat: {
    alignItems: "center",
    marginVertical: 120,
  },
});
export default Cart;
