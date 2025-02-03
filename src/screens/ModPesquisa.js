import {  ScrollView, Image, StyleSheet, Text, View, TouchableOpacity,Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import React, { useState } from 'react';


import templateStyle from "../style/template";
import Input from "../components/input";
import Botao from "../components/botao";
import { template } from "@babel/core";

const ModPesquisa = (props) => {

  const voltar = () => {
    props.navigation.goBack();
}

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={templateStyle.container}>
    
            <Input placeholder='' titulo='Nome'/>
            <Input placeholder='' titulo='Data'/>

             <View style={{width: '70%'}}>
                <Text style={templateStyle.text}> Imagem</Text>
                <Image
                    source={{ uri: '' }}
                    style={template.image}
                />
             </View>

            <Botao titulo ='CADASTRAR' cor='#49b976' height={40} marginBot={30}/>

            <TouchableOpacity  style={template.iconContainer} onPress={() => setModalVisible(true)}>
                <Icon name='delete' size={60} color='gray'/>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={template.modalContainer}>
                <Text style={[templateStyle.text]}>Tem certeza que deseja apagar a pesquisa?</Text>
                <View style={template.butContainer}>
                  <TouchableOpacity  style={template.but1} onPress={voltar}>
                    <Text style={[template.textBut]}>Sim</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={template.but2} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[template.textBut]}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            
    </ScrollView>
  )
}

const style = StyleSheet.create({
    image: {
      width: 200,
      height: 200
    },
    tit:{
      alignSelf: 'center'
    },
    iconContainer: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    modalContainer: {
      width:300,
      height:200,
      borderWidth: 2,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#372775',
      alignSelf: 'center',
      marginTop: 60
    },
    butContainer:{
      flexDirection: 'row'
    },
    but1:{
      marginHorizontal: 2,
      backgroundColor: '#ff8383',
      width: 100,
      height: 40
    },
    but2:{
      marginHorizontal: 2,
      backgroundColor: '#3f92c5',
      width: 100,
      height: 40
    },
    textBut:{
      fontSize: 20,
      color:'white',
      fontFamily: 'AveriaLibre-Regular',
      alignSelf: 'center'
    },
    
});


export default ModPesquisa;