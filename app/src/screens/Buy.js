import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import Card from "../components/home/Card";
import { StoreContext } from "../context/storeContext";

const Buy = () => {
  const { theme, orders } = useContext(StoreContext);
  const [products, setProducts] = useState([
    // {
    //   _id: "64089d10a66cb68988bcf08a",
    //   name: "Pommade",
    //   image:
    //     "https://media.bazarafrique.com/upload/post/6231605a34497243375165.jpg",
    //   category: "Pommades",
    //   price: "2345",
    //   details: "",
    //   likes: ["100"],
    //   dislikes: ["10"],
    //   comments: ["trop efficace"],
    //   createdAt: "2023-03-08T14:34:56.440Z",
    //   updatedAt: "2023-03-08T14:34:56.440Z",
    //   __v: 0,
    // },
    // {
    //   _id: "6408a06fa66cb68988bcf08e",
    //   name: "Savon",
    //   image:
    //     "https://i0.wp.com/themadon.com/wp-content/uploads/2021/08/Bamboo-charcoal-soap-600x600-1.jpg?fit=600%2C600&ssl=1",
    //   category: "savons",
    //   price: "1000",
    //   details: "",
    //   likes: ["120"],
    //   dislikes: ["20"],
    //   comments: ["bien bon pour la peau "],
    //   createdAt: "2023-03-08T14:49:19.641Z",
    //   updatedAt: "2023-03-08T14:49:19.641Z",
    //   __v: 0,
    // },
  ]);

  return (
    <View style={[styles.buy, { backgroundColor: theme.backgroundColor }]}>
      <FlatList
        style={styles.container}
        data={orders}
        numColumns={2}
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
  buy: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 5,
    backgroundColor: "rgba(10, 160, 35, 0.658)",
    height: 80,
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
    marginTop: 35,
    fontWeight: "bold",
    fontSize: 16,
  },
  container: {
    margin: 15,
  },
  car: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Buy;
