import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { StoreContext } from "../context/storeContext";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Theme = () => {
  const { theme, toggleTheme, sombre } = useContext(StoreContext);

  return (
    <View
      style={[
        styles.theme,
        { backgroundColor: theme.backgroundColor, color: theme.color },
      ]}>
      {!sombre && (
        <View style={styles.btn}>
          <View>
          <Icon
          style={[styles.icon]}
          color="orange"
          name="sunny-outline"
          size={20}
        />
            <Text style={[styles.text, { color: theme.color }]}>Bonjour</Text>
          </View>
          <TouchableOpacity onPress={toggleTheme}>
            <Feather style={[styles.icon2]} name="toggle-left" size={30} />
          </TouchableOpacity>
        </View>
      )}

      {sombre && (
        <View style={styles.btn}>
          <View>
          <Icons style={[styles.icon]} color='#fff' name="cloud-moon" size={20} />
           
            <Text style={[styles.text, { color: theme.color }]}>Bonsoir</Text>
          </View>
          <TouchableOpacity onPress={toggleTheme}>
            <Feather
              style={[styles.icon2]}
              name="toggle-right"
              color="orange"
              size={30}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  theme: {
    flex: 1,
  },
  btn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#dcdcdc20",
    alignItems: "center",
    // width:'100%'
  },
  text: {
    fontSize: 18,
    marginLeft:15,
    marginTop:10
  },
  icon: {
    marginLeft:15,
    
  },
  icon2: {
    margin: 25,
  },
});
export default Theme;
