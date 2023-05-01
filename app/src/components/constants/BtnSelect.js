import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../../context/storeContext";

const BtnSelect = ({ item }) => {
  const navigation = useNavigation();
  const { theme } = useContext(StoreContext);
  return (
    <>
      {item.id === 1 && (
        <TouchableOpacity
          style={styles.select}
          onPress={() => {
            navigation.navigate("Favoris");
          }}>
          <Ionicons
            style={[styles.icon, { color: theme.color }]}
            name={item.icon}
            color="green"
            size={20}
          />
          <Text style={[styles.name, { color: theme.color }]}>{item.name}</Text>
        </TouchableOpacity>
      )}

      {item.id === 2 && (
        <TouchableOpacity
          style={styles.select}
          onPress={() => {
            navigation.navigate("Category");
          }}>
          <Ionicons
            style={[styles.icon, { color: theme.color }]}
            name={item.icon}
            color="green"
            size={20}
          />
          <Text style={[styles.name, { color: theme.color }]}>{item.name}</Text>
        </TouchableOpacity>
      )}

      {item.id === 3 && (
        <TouchableOpacity
          style={styles.select}
          onPress={() => {
            navigation.navigate("Bonplans");
          }}>
          <Icon
            style={[styles.icon, { color: theme.color }]}
            name={item.icon}
            color="green"
            size={20}
          />
          <Text style={[styles.name, { color: theme.color }]}>{item.name}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  select: {
    margin: 10,
    width: 130,
    height: 40,
    backgroundColor: "#dcdcdc20",
    borderRadius: 50,
    flexDirection: "row",
  },
  name: {
    fontWeight: 500,
    margin:10
  },
  icon: {
    margin: 10,
    fontWeight: "bold",
  },
});

export default BtnSelect;
