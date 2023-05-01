import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../components/constants/Header";
import SearchInput from "../components/home/SearchInput";
import CardList from "../components/home/CardList";
import Selects from "../components/home/Selects";
import Icon from "react-native-vector-icons/FontAwesome";
import { StoreContext } from "../context/storeContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation()
  const { theme ,userId} = useContext(StoreContext);
  useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => res.data)
            .then((data )=> console.log(data))
  },[])
  return (
   
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.backgroundColor, color: theme.color },
      ]}>
         {!userId ? navigation.push('acceuil'):''}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.input,
            { backgroundColor: theme.backgroundColor, color: theme.color },
          ]}>
          <SearchInput />
        </View>

        <Selects />

        <View>
          <CardList />
        </View>

        <View>
          <View style={styles.titre}>
            <Text style={[styles.title, { color: theme.color }]}>
              Les nouveautes
            </Text>
            <Icon
              name="arrow-right"
              style={[{ margin: 15 }, { color: theme.color }]}
              size={16}
            />
          </View>
          <CardList innerPage={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: "white",
  },

  selectContainer: {
    margin: 10,
  },
  title: {
    marginTop: 15,
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  titre: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
