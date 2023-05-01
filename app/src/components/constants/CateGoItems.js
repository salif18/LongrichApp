import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const CateGoItems = ({ item }) => {
  const {theme} = useContext(StoreContext)
  return (
    <TouchableOpacity style={styles.cateItem}>
      <View>
        <Image style={styles.image} source={{ uri: `${item.image}` }} />
      </View>
      <Text style={[styles.name,{color:theme.color}]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cateItem: {
    width: 150,
    height: 220,
    margin:20,
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 190,
  },
  name: {
    fontSize: 12,
    fontWeight: 600,
    margin: 10,
  },
});
export default CateGoItems;
