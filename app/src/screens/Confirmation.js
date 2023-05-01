import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const Confirmation = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.confirmation}>
      <View style={styles.container}>
              <Text style={styles.confir}><FontAwesome name='star'  size={20} /> Confirmation <Feather name='check' color='green' size={30} /></Text>
              <View>
                <Text style={styles.text}>Votre Commande a été envoyer avec succès !!
                Vous serez livrer dans les prochaines heures, Merci !</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Home')}>
              <Text style={styles.tex}>Passez une nouvelle commande</Text>
              </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    confirmation:{
        flex:1,
        backgroundColor:'white'
    },
    container:{
        marginTop:200,
        marginHorizontal:20,
        backgroundColor:'#dcdcdc30',
        borderRadius:10
    },
    confir:{
        fontSize:18,
        fontWeight:600,
        marginTop:10,
        marginLeft:15
    },
    text:{
        margin:15,
        color:'green',
        fontSize:15
    },
    btn:{
        marginLeft:100,
        marginBottom:15
    },
    tex:{
        fontSize:16,
        color:'#333'
    }
})
export default Confirmation