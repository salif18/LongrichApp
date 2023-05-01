import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import { categoryData } from "../data/CategoryData";
import CateGoItems from "../components/constants/CateGoItems";
import { StoreContext } from "../context/storeContext";

const Category = () => {
  const Categories = categoryData;
  const {theme} = useContext(StoreContext)
  return (
    <View style={[styles.category,{backgroundColor:theme.backgroundColor}]}>
      <FlatList
        data={Categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <CateGoItems item={item} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  category: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
  
    justifyContent:'center',
    alignItems:'center'
  },
});
export default Category;
