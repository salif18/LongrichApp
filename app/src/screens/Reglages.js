import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import Profile from "../components/constants/Profile";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StoreContext } from "../context/storeContext";

const Reglages = () => {
  const navigation = useNavigation();
  const { theme ,sombre} = useContext(StoreContext);
  return (
    // <View>
    //     <Profile/>
    // </View>

    <ScrollView
      style={[styles.reglages, { backgroundColor: theme.backgroundColor }]}>
      <SafeAreaView >
        <TouchableOpacity
          style={styles.touches}
          onPress={() => {
            navigation.navigate("Compte");
          }}>
          <View style={styles.touc}>
            <Feather name="user" size={25} color={theme.color} />
            <Text style={[styles.name, { color: theme.color }]}>Compte</Text>
          </View>
          <Icon
            style={[styles.ic, { color: theme.color }]}
            name="keyboard-arrow-right"
            size={26}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touches}>
          <View style={styles.touc}>
            <Ionicons
              name="notifications-outline"
              color={theme.color}
              size={25}
            />
            <Text style={[styles.name, { color: theme.color }]}>
              Notifications
            </Text>
          </View>
          <Icon
            style={[styles.ic, { color: theme.color }]}
            name="keyboard-arrow-right"
            size={26}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touches}
          onPress={() => navigation.navigate("Theme")}>
          <View style={styles.touc}>
            <Material
              name="sun-thermometer-outline"
              style={{ color: sombre ? "orange" : theme.color }}
              size={25}
            />
            <Text style={[styles.name, { color: theme.color }]}>Thèmes</Text>
          </View>
          <Icon
            style={[styles.ic, { color: theme.color }]}
            name="keyboard-arrow-right"
            size={26}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touches}>
          <View style={styles.touc}>
            <Material
              name="shield-check-outline"
              color={theme.color}
              size={25}
            />
            <Text style={[styles.name, { color: theme.color }]}>Securités</Text>
          </View>
          <Icon
            style={[styles.ic, { color: theme.color }]}
            name="keyboard-arrow-right"
            size={26}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.deco}>
          <AntDesign name="logout" color={theme.color} size={20} />
          <Text style={[styles.name, { color: theme.color }]}>
            Se déconnecter
          </Text>
        </TouchableOpacity>

        <View style={styles.cont}>
          <Text style={styles.text}>Developeur</Text>
          <Text style={styles.text}>Salif Moctar Konate</Text>
          <Text style={styles.text}>Version 0.0.1</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  reglages: {
    flex: 1,
    backgroundColor: "#FFFA",
    paddingTop: 20,
  },
  touches: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth:1,
    borderBottomColor:'#dcdcdc23',
    backgroundColor:'#dcdcdc20'
  },
  touc: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:10
  },
  name: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: 600,
  },
  deco: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: "20",
    backgroundColor: "#dcdcdc20",
    width: 200,
    height: 40,
    marginLeft: "23%",
  },
  cont: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontWeight: 600,
    fontSize: 16,
    color: "#ccc",
  },
  ic: {
    marginRight: 20,
  },
});
export default Reglages;
