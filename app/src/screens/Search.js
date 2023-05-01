import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import SearchInput from "../components/home/SearchInput";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../context/storeContext";
import TopTabNavigator from "../onglets/TopTabNavigator";

const Search = () => {
  const navigation = useNavigation();
  const { theme } = useContext(StoreContext);
  return (
    <View style={[styles.search, { backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.champ]}>
        <SearchInput />
      </View>
      <TopTabNavigator/>
      <ScrollView></ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: "#fff",
  },
  champ: {
    marginTop: 50,
    padding: 20,
  },
});

export default Search;
