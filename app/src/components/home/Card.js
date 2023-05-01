import { View, Text, Image, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../../context/storeContext";

const Card = ({ item }) => {
  const navigation = useNavigation()
  const {theme} = useContext(StoreContext)
  return (
    <TouchableOpacity style={[styles.card,{backgroundColor:theme.backgroundColor}]} onPress={()=>{navigation.navigate('Details',{item})}}>
      <View style={styles.img}>
        <Image style={styles.image} source={{ uri: `${item.image}` }} />
      </View>
      <View style={styles.cardBody}>
        <Text style={[styles.name,{color:theme.color}]}>{item.name}</Text>
        <Text style={[styles.rating,{color:theme.color}]}>
          {item.likes} <Icon name="like1" color="green" size={20} /> /{" "}
          {item.dislikes} <Icon name="dislike1" size={20} />
        </Text>
        <Text style={[styles.price,{color:theme.color}]}>{item.price} Fcfa</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 170,
    height: 260,
    margin: 5,
    borderRadius: 5,
    backgroundColor:'#fffa',
    // borderWidth:1,
    // borderColor:"rgba(230, 230, 230, 0.295)"

  },
  img:{
   padding:10
  },
  image: {
    width: 150,
    height: 160,
    borderRadius: 5,
  },
  cardBody: {
    marginLeft:5,
    marginTop: 10,
    backgroundColor: "cccc",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 300,
  },
});
export default Card;
