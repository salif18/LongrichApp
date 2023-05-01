import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../../context/storeContext";

const Header = () => {
  const navigation = useNavigation();
  const { cart ,theme} = useContext(StoreContext);
  return (
    <View style={[styles.header,{backgroundColor:theme.backgroundColor}]}>
      <View style={styles.container}>
        <View style={styles.fieldInput}>
          <Image
            style={styles.img}
            source={require("../../../assets/logo.png")}
          />
          <Text style={styles.titleText}>hadja</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Cart");
            }}>
            <View style={styles.cartCont}>
              <Icon name="shopping-cart" size={25} color="#000" />
              {cart.length > 0 && (
                <View style={styles.radiu}>
                  <Text style={styles.len}>{cart.length}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    width: "100%",
    backgroundColor: "rgba(10, 160, 35, 0.658)",
    height:95
  },
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    paddingTop: 40,
    paddingRight: 20,
  },
  fieldInput: {
    paddingTop: 40,
    flexDirection: "row",
    marginLeft: -10,
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
});
export default Header;
