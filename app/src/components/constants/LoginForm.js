import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

// API
const URI = `http://192.168.1.17:3001/authentification/login`;
const headers = { "Content-Type" : "application/json" }

const LoginForm = () => {
  const navigation = useNavigation()
  const {theme ,sombre,login ,userId,token} = useContext(StoreContext)
  //champs
  const initialValue = {
    numero: "",
    password: "",
  };

  //controle des champs
  const validationSchema = yup.object({
    numero: yup.number().required("Entrez votre numero"),
    password: yup.string().required("entrer votre mot de passe"),
  });

  //envoie de formulaire
  const sendForm =(values,actions)=>{
    axios.post(URI,values,headers)
    .then(res => res.data)
    .then(data => login(data.userId,data.token))
    .catch(err=>console.log(err))
    actions.resetForm()
    
  }
console.log(token)
  return (
    <View style={styles.loginForm}>
    <View style={styles.form}>
        <Formik
         
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={sendForm}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            
              <>
                <TextInput
                style={styles.input}
                  value={values.numero}
                  onChangeText={handleChange("numero")}
                  placeholder="Numero"
                  placeholderTextColor={{color:'#000'}}
                  keyboardType='numeric'
                />
                {touched.numero && errors.numero && (
                  <Text style={{ color: "red" }}>{errors.numero}</Text>
                )}
             
                <TextInput
                style={styles.input}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  placeholderTextColor={{color:'#000'}}
                  secureTextEntry
                />
              {touched.numero && errors.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}
              <TouchableOpacity style={styles.inputBtn} onPress={handleSubmit}>
                <Text style={styles.text}>Se connecter</Text>
              </TouchableOpacity>
             
            </>
          )}
        </Formik>
        </View>
      </View>
    
  );
};
const styles = StyleSheet.create({
 loginForm:{
  flex:1
 },
 form:{
   marginVertical:60,
},
input:{
  width:330,
  height:45,
  marginTop:10,
  borderRadius:20,
  padding:10,
  fontSize:16,
  backgroundColor:'#dcdcdc30',
  
},
inputBtn:{
  alignItems:'center',
  marginTop:15,
  width:330,
  height:40,
  borderRadius:20,
  backgroundColor:'#222222'
},
text:{
  color:'#eeeeee',
  fontSize:18,
  padding:10
}
})
export default LoginForm;
