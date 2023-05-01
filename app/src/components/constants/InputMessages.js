import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const InputMessages = () => {
  const { theme } = useContext(StoreContext);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={[styles.footer, { backgroundColor: theme.backgroundColor }]}>
        <TextInput style={[styles.input]} 
        placeholder="messages..." 
          placeholderTextColor={theme.color}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "#dcdcdc30",
  },
  footer: {
    flex:1,
    backgroundColor: "#fff",
    margin:10
  },
});
export default InputMessages;
