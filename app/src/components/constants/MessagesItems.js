import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../../context/storeContext";

const MessagesItems = ({ item }) => {
  const navigation = useNavigation();
  const { theme } = useContext(StoreContext);
  return (
    <TouchableOpacity
      style={[styles.containerMessage, { backgroundColor: theme.borderRadius }]}
      onPress={() => navigation.navigate("Conversations", { item })}>
      <Image style={styles.img} source={{ uri: `${item.userImage}` }} />
      <View>
        <Text style={[styles.text, { color: theme.color }]}>
          {item.messages[0].message}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerMessage: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: "#eeef",
  },
  text: {
    color: "#333",
    fontSize: 16,
    fontWeight: 600,
  },
  date: {
    marginTop: 5,
    fontSize: 13,
    color: "gray",
  },
});
export default MessagesItems;
