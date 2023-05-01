import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import MessagesItems from "../components/constants/MessagesItems";
import { StoreContext } from "../context/storeContext";

const Messages = () => {
  const { messages, theme } = useContext(StoreContext);
  return (
    <View style={[styles.messages, { backgroundColor: theme.backgroundColor }]}>
      {messages.length <= 0 && (
        <Text style={styles.lengthMessage}>Aucuns messages</Text>
      )}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.textos}>
            <MessagesItems item={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messages: {
    flex: 1,
  },

  lengthMessage: {
    marginHorizontal: 100,
    marginVertical: 100,
    fontSize: 16,
    fontWeight: 300,
  },
  textos: {
    margin: 1,
    borderBottomWidth:2,
    borderBottomColor:'#dcdcdc30'
  },
});
export default Messages;
