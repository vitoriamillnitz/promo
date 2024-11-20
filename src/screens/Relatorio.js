import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

const Relatorio = () => (
  <ScrollView style={styles.container}>
    <Image
      source={{ uri: 'https://pt.vecteezy.com/png/15130852-icone-do-grafico-de-pizza.png' }}
      style={styles.image}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 200,
    marginTop: 50,
  },
    container: {
        flexGrow: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        padding:10,
        backgroundColor: "#372775"
    },
    
})




export default Relatorio;