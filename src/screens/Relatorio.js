import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

const Relatorio = () => (
  <ScrollView 
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
  >
      <Image source={require('../images/pizza.png')} 
      style={styles.image}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    width: '100%', 
    height: 250,   
    resizeMode: 'contain', 

  },
  container: {
    flexGrow: 1, 
    backgroundColor: "#372775",
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', 
    padding: 20,
  },
});

export default Relatorio;

