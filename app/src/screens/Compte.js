import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Compte = () => {
  return (
    <View style={styles.compte}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Supprimer compte</Text>
        <Icon style={styles.ic} name="keyboard-arrow-right" size={26} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  compte: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    margin: 20,
    padding: 15,
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
});
export default Compte;
