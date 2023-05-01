import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/constants/Header";
import { StoreContext } from "../context/storeContext";

const SingleProd = () => {
  const route = useRoute();
  const { item } = route.params;
  const { addCart, cart, increment, decrement, quantity, theme } =
    useContext(StoreContext);

  return (
    <>
      <Header />
      <ScrollView
        style={[styles.singleProd, { backgroundColor: theme.backgroundColor }]}>
        <View style={styles.container}>
          <View style={styles.contImage}>
            <Image style={styles.image} source={{ uri: `${item.image}` }} />
          </View>

          <View style={[styles.informations,{backgroundColor:theme.barre}]}>
            <View style={styles.infos}>
              <Text style={[styles.name,{color:theme.color}]}>{item.name}</Text>
              <Text style={[styles.price,{color:theme.color}]}>{item.price * quantity} Fcfa</Text>
            </View>

            <View style={styles.btnIncrements}>
              <TouchableOpacity style={styles.btn} onPress={() => increment()}>
                <Text style={styles.val}>+</Text>
              </TouchableOpacity>
              <Text style={[styles.qty,{color:theme.color}]}>{quantity}</Text>
              <TouchableOpacity style={styles.btn} onPress={() => decrement()}>
                <Text style={styles.val}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.btnAdd}
              onPress={() => addCart(item)}>
              <Text style={styles.textAdd}>Ajouter au panier</Text>
              <Ionicons name="cart-arrow-down" size={20} color="#fff" />
            </TouchableOpacity>

            <View style={styles.desContainer}>
              <Text style={[styles.title,{color:theme.color}]}>Description</Text>
              <Text style={styles.details}>{item.details}</Text>
            </View>
          </View>

          <View style={styles.avis}>
            <Text style={[styles.notes, { color: theme.color }]}>Les avis</Text>
            <Text style={[styles.likes, { color: theme.color }]}>
              {item.likes}
            </Text>
          </View>

          <View style={styles.comments}>
            <Text style={[styles.comment, { color: theme.color }]}>
              Commentaires
            </Text>
            <Text style={[styles.commit, { color: theme.color }]}>
              {item.comments}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  singleProd: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contImage: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 400,
    backgroundColor: "#fff",
  },
  infos: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 10,
  },
  informations: {
    backgroundColor: "#eee",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  desContainer: {
    padding: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 600,
  },
  details: {
    fontSize: 16,
    marginVertical: 10,
  },
  avis: {
    margin: 20,
  },
  notes: {
    fontSize: 20,
    fontWeight: 600,
  },
  likes: {
    fontSize: 15,
  },
  comments: {
    marginBottom: 20,
  },
  comment: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 20,
  },
  commit: {
    marginLeft: 20,
    fontSize: 16,
  },
  btnIncrements: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  btn: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    width: 60,
    height: 40,
    borderRadius: 10,
  },
  val: {
    padding: 8,
    fontSize: 20,
    fontWeight: 700,
    color: "green",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  btnAdd: {
    padding: 15,
    marginLeft: 88,
    width: 200,
    borderRadius: 20,
    backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textAdd: {
    marginRight: 10,
    fontWeight: 700,
    color: "#fff",
    fontSize: 16,
  },
  qty: {
    fontSize: 18,
    fontWeight: 700,
  },
});
export default SingleProd;
