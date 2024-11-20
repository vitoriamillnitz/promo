import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

const Cartao = ({ onPress, capa, nome, data }) => {
  return (
    <Pressable onPress={onPress}>
      <Card style={estilos.cartao}>
        <View style={estilos.imagem}>
          <Card.Cover source={capa} style={estilos.cartaoImagem} />
        </View>
        <Card.Content>
          <Text style={estilos.title}>{nome}</Text>
          <Text style={estilos.subtitle}>{data}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
};

const estilos = StyleSheet.create({
  
  title: {
    color: 'blue',
    fontSize: 20,
    width: 140,
    fontFamily: 'AveriaLibre-Regular',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular'
  },
  cartao: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
  },
  cartaoImagem: {
    width: 70,
    height: 70,
    margin: 12
  },
  imagem: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Cartao;