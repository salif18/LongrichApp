import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
// import { productsData } from "../../data/ProductsData";
import { StoreContext } from "../../context/storeContext";


// Sconst JSONPLACEHOLDER = `http://jsonplaceholder.typicode.com/users`
const URI = `http://192.168.1.17:3001/products`;
const headers = { "Content-Type" : "application/json" }

const CardList = ({ innerPage }) => {
  const [products, setProducts] = useState([]);
  const { theme } = useContext(StoreContext);

  useEffect(() => {
    axios
      .get(URI, headers)
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <View>
      <View style={styles.titre}>
        {!innerPage && (
          <Text style={[styles.title, { color: theme.color }]}>
            Promos du jour
          </Text>
        )}
        {!innerPage && (
          <Icon
            name="arrow-right"
            style={[{ margin: 15, color: theme.color }]}
            size={16}
          />
        )}
      </View>
      <FlatList
        showsHorizontalScrollIndicator={true}
        data={products}
        horizontal={true}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Card item={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CardList;
