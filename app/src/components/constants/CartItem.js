import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import { StoreContext } from "../../context/storeContext";

const CartItem = ({ item }) => {
  const { delCart, increCart, decreCart, theme } = useContext(StoreContext);
  return (
    <View style={[styles.cartItem, { backgroundColor: theme.barre }]}>
      <View>
        <Image style={styles.img} source={{ uri: `${item.image}` }} alt="im" />
      </View>

      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn} onPress={() => increCart(item)}>
          <Text style={[styles.signe]}>+</Text>
        </TouchableOpacity>
        <Text style={{ color: theme.color }}>{item.quantity}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => decreCart(item)}>
          <Text style={styles.signe}>-</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ color: theme.color }}>
        {item.price * item.quantity} Fcfa
      </Text>
      <TouchableOpacity onPress={() => delCart(item._id)}>
        <Icon name="delete" size={26} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 30,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "rgba(10, 160, 35, 0.658)",
  },
  signe: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 600,
    color: "white",
  },
});
export default CartItem;
