import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";

// API
const URI = `http://192.168.1.17:3001/authentification/signup`;
const headers = { "Content-Type" : "application/json" }

const RegistreForm = () => {
  const { theme, sombre } = useContext(StoreContext);
  //Definition des champs
  const initialValue = {
    username: "",
    numero: "",
    password: "",
  };

  //controle des champs
  const validationSchema = yup.object({
    username: yup.string().required("veuillez saisir un username"),
    numero: yup.number().required("veuillez enter unnumero"),
    password: yup
      .string()
      .min(6)
      .max(8)
      .required("Veuillez saisir un mot de passe de 6 a 8"),
  });

  //envoie de formulaire
  const sendForm = (values, actions) => {
    axios.post(URI,values,headers)
    .then(res => res.json())
      .then((data )=> console.log(data))
    actions.resetForm();
  };
  return (
    <View style={styles.registeform}>
      <View style={styles.form}>
        <Formik
          initialValues={initialValue}
          onSubmit={sendForm}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                style={styles.input}
                value={values.username}
                onChangeText={handleChange("username")}
                placeholder="Username"
                placeholderTextColor={{color:'#000'}}
              />
              {touched.username && errors.username && (
                <Text style={{ color: "red" }}>{errors.username}</Text>
              )}

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
                placeholder={"Password"}
                placeholderTextColor={{color:'#000'}}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <View>
                <TouchableOpacity
                  style={styles.inputBtn}
                  onPress={handleSubmit}>
                  <Text style={styles.text}>Creer un compte</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  registeform: {
    flex: 1,
  },
  form: {
    marginVertical: 50,
  },
  input: {
    width: 330,
    height: 45,
    marginTop: 15,
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#dcdcdc30",
  },
  inputBtn: {
    alignItems: "center",
    marginTop: 15,
    width: 330,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222222",
  },
  text: {
    color: "#eeeeee",
    fontSize: 18,
    padding: 10,
  },
});
export default RegistreForm;
