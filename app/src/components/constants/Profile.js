import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { profileData } from "../../data/ProfileData";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.profInfos}
        onPress={() =>
          navigation.navigate("Modifier profile", { profileData })
        }>
        <Image style={styles.img} source={{ uri: `${profileData.image}` }} />
        <Text style={styles.name}>{profileData.nom}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate("Cart");
        }}>
        <Ionicons name="cart-outline" size={26} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeef",
  },
  profInfos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: 5,
    marginTop: 50,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  img: {
    marginTop: 50,
    marginBottom: 15,
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    marginTop: 50,
    marginBottom: 15,
    marginLeft: 10,
    fontWeight: 600,
  },
});
export default Profile;
