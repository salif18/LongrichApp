import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  const route = useRoute();
  const { profileData } = route.params;
  return (
    <ScrollView style={styles.profile}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: `${profileData.image}` }} />
        <TouchableOpacity style={styles.modifBtn}>
          <Text style={styles.textModif}>Modifier</Text>
          <Feather name="edit" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.btns}>
          <Text style={styles.title}>NOM</Text>
          <View style={styles.cont}>
            <TextInput placeholder={`${profileData.nom}`} />
            <Icon style={styles.ic} name="keyboard-arrow-right" size={26} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btns}>
          <Text style={styles.title}>NUMERO</Text>
          <View style={styles.cont}>
            <TextInput placeholder={`${profileData.numero}`} />
            <Icon style={styles.ic} name="keyboard-arrow-right" size={26} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btns}>
          <Text style={styles.title}>EMAIL</Text>
          <View style={styles.cont}>
            <TextInput placeholder={`${profileData.email}`} />
            <Icon style={styles.ic} name="keyboard-arrow-right" size={26} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#eee",
  },
  imgContainer: {
    margin: 20,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#eeee",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  modifBtn: {
    marginBottom: 10,
    flexDirection: "row",
  },
  textModif: {
    fontSize: 16,
    fontWeight: 600,
    marginRight: 10,
  },
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btns: {
    margin: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    height: 900,
  },
  title: {
    fontWeight: 600,
    color: "gray",
  },
});
export default ProfileScreen;
