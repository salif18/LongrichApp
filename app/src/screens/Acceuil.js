import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  SliderBase,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { StoreContext } from "../context/storeContext";
import RegistreForm from "../components/constants/RegistreForm";
import LoginForm from "../components/constants/LoginForm";
import MyModal from "../components/constants/MyModal";

const Acceuil = () => {
  const navigation = useNavigation();
  const { theme, sombre,userId } = useContext(StoreContext);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={[styles.acceuil, { backgroundColor: theme.backgroundColor }]}>
      <Image style={styles.image} source={require("../../assets/logo.png")} />
      <MyModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {!userId ? <TouchableOpacity
        style={[styles.btn, { backgroundColor: theme.btn }]}
        onPress={() => setModalOpen(true)}
        size={26}>
        <Text style={styles.btnText}>Se connecter</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: theme.btn }]}
        onPress={() => navigation.push("drawer")}>
        <Text style={styles.btnText}>Decouvrir</Text>
        <Icon name="arrow-forward-circle-outline" color="#fff" size={26} />
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  acceuil: {
    flex: 1,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 250,
    backgroundColor: "white",
  },
  btn: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "black",
    width: 200,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    marginRight: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Acceuil;
