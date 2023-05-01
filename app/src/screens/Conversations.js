import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import InputMessages from "../components/constants/InputMessages";
import { StoreContext } from "../context/storeContext";

const Conversations = () => {
  const { theme } = useContext(StoreContext);
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={[styles.convers,{backgroundColor:theme.backgroundColor}]}>
      <ScrollView
        style={[
          styles.conversations,
          { backgroundColor: theme.backgroundColor },
        ]}>
        {item.messages.map((item2) => (
          <View
            key={item2.id}
            style={[
              styles.conv,
              {
                margin: 5,
                fontSize: 16,
                padding: 5,
                alignSelf: item2.user.id === 1 ? "flex-end" : "flex-start",
                backgroundColor:
                  item2.user.id === 1 ? "rgba(10, 160, 35, 0.658)" : "#fffa",
                maxWidth: "70%",
                borderRadius: 10,
              },
            ]}>
            <Text
              style={[
                styles.tex,
                { color: item2.user.id === 1 ? "#fffa" : "#333" },
              ]}>
              {" "}
              {item2.message}{" "}
            </Text>
            <Text
              style={[
                styles.dat,
                {
                  alignSelf: item2.user.id === 1 ? "flex-end" : "flex-start",
                  color: item2.user.id === 1 ? "#333" : "gray",
                },
              ]}>
              {item2.date}
            </Text>
          </View>
        ))}
      </ScrollView>
        <InputMessages />
    </View>
  );
};

const styles = StyleSheet.create({
  convers:{
   flex:1,
   flexDirection:'column',
   justifyContent:'space-between'
  },
  conversations: {
    flex: 1,
    margin:10,
    marginBottom:110
  },
  tex: {
    fontSize: 16,
  },
  dat: {
    alignItems: "flex-end",
    marginTop: 5,
  },
});
export default Conversations;
