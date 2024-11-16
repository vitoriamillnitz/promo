import { ScrollView, StyleSheet, Text, View } from "react-native";
import React,{useEffect} from "react";


const Agradecimento = (props) => {
    useEffect(() =>{
        setTimeout(() => {
            props.navigation.goBack();
        },3000);
        });

    

  return(
    <ScrollView contentContainerStyle={style.scrollViewContent}>
      <View style={style.container}>
        <Text style={style.texto}>Obrigado por participar da pesquisa! </Text>
        <Text style={style.texto}>Aguardamos você no próximo ano! </Text>
        </View>
    </ScrollView>
  )

}

const style = StyleSheet.create({
    scroll:{
        justifyContent:'space-evenly',
        alignItems: 'center',

    },
    scrollView: {
        flex: 1,
      },

    texto: {
      fontFamily: 'AveriaLibre-Regular',
        fontSize: 35,  
        marginVertical: 10,                  
        textAlign: 'center', 
        color:'#FFFFFF'       
      },

      scrollViewContent: {
        backgroundColor: '#372775', 
        flexGrow: 1,     
        justifyContent: 'center', 
        alignItems: 'center',  
      },

      container: {
        justifyContent: 'center', 
        alignItems: 'center',     
        padding: 20,
      },

})


export default Agradecimento