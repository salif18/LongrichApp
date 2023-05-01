import { View, Text, TextInput, StyleSheet, TouchableOpacity, } from "react-native";
import React, { useContext, useState } from "react";

import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../../context/storeContext";

const SearchInput = () => {
  const navigation = useNavigation()
  const {theme} = useContext(StoreContext)

  return (
    <TouchableOpacity style={[styles.container]} onPress={()=>{navigation.navigate('search')}}>
      <Icon name="search" color={theme.color} size={20} />
      <TextInput
        style={[styles.champ,{color:theme.color}]}
       
        placeholder="Search..."
        placeholderTextColor={theme.color}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcdcdc20",
    width: 340,
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginTop:20,
  
  },
  champ: {
    marginLeft: 10,
    fontWeight:'500',
    fontSize:16,

  
  },
});
export default SearchInput;
