import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import BtnSelect from "../constants/BtnSelect";

const Selects = () => {
  
  const data = [
    { id: 1, name: "Favoris", icon: "heart" },
    { id: 2, name: "Categories", icon: "apps-outline" },
    { id: 3, name: "Bon plans", icon: "fire" },
  ];
  
  return (
  
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <View>
         <BtnSelect item={item} />
         </View>
        )}
      />
    
  );
};

export default Selects;
