import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../components/Input';
import Botao from '../components/Botao';

const ModPesquisa = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const voltar = () => {
    props.navigation.goBack();
  };

  return (

    <ScrollView styles={styles.container}>
      <Input placeholder='' titulo='Nome' />
      <Input placeholder='' titulo='Data' />

      <View style={{ width: '70%' }}>
        <Text style={styles.text}>Imagem</Text>
        <Image
          source={{ uri: '' }}
          style={styles.image}
        />
      </View>

      <Botao titulo='CADASTRAR' cor='#49b976' height={40} marginBot={30} />

      <TouchableOpacity style={styles.iconContainer} onPress={() => setModalVisible(true)}>
        <Icon name='delete' size={60} color='gray' />
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Tem certeza que deseja apagar a pesquisa?</Text>
          <View style={styles.butContainer}>
            <TouchableOpacity style={styles.but1} onPress={voltar}>
              <Text style={styles.textBut}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but2} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textBut}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  tit: {
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  modalContainer: {
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    alignSelf: 'center',
    marginTop: 60,
  },
  butContainer: {
    flexDirection: 'row',
  },
  but1: {
    marginHorizontal: 2,
    backgroundColor: '#ff8383',
    width: 100,
    height: 40,
  },
  but2: {
    marginHorizontal: 2,
    backgroundColor: '#3f92c5',
    width: 100,
    height: 40,
  },
  textBut: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    alignSelf: 'center',
  },
  text:{
    fontSize: 20,
    color:'white',
    fontFamily: 'AveriaLibre-Regular'
},
textAgradecimento:{
    fontSize: 35,
    color:'white',
    fontFamily: 'AveriaLibre-Regular'
},
textErro: {
    color:'#cb6478',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14,
},
textBotao:{
    fontSize: 20,
    color:'white',
    textAlign:'center',
    fontFamily: 'AveriaLibre-Regular'
},
title:{
    fontSize: 50,
    color:'white',
    fontFamily: 'AveriaLibre-Regular'
},
titleDrawer:{
    fontSize: 30,
    color:'white',
    fontFamily: 'AveriaLibre-Regular',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    textAlign: 'center',
    width: '90%',
    marginLeft: '5%',
    padding: 8
},
textInput:{
    backgroundColor: 'white',
    color: '#3f92c5',
    fontSize: 20,
    paddingLeft: 20,
    fontFamily: 'AveriaLibre-Regular'
},
container: {
    flexGrow: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    padding:10,
    backgroundColor: "#372775"
},

});

export default ModPesquisa;