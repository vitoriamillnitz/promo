//Importação
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from './src/components/Botao'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { TextInput } from 'react-native-paper'


const theme = {
  ...DefaultTheme,
  colors:{
    primary: "tomato",
    secondary: "yellow"
  }
}



//Definição
const App = () => {

  const [txtPeso, setPeso] = useState('')
  const [txtAltura, setAltura] = useState('')
  const [txtImc, setIMC] = useState('')

  const calcularIMC = () => {

    console.log("Entrou na função calcularIMC")

    let peso = parseFloat(txtPeso)
    let altura = parseFloat(txtAltura)

    //IMC = peso / (altura * altura)
    let resultado = peso / (altura * altura)

    setIMC("O seu IMC é: " + resultado.toFixed(1))
  }

  const limpar = () => {
    setAltura('')
    setPeso('')
    setIMC('')
  }

  return (
    <PaperProvider theme={theme}>
    <View style={estilos.view}>
      <View style={estilos.cImage}>
      <Icon name="home" size={60} color="#000000" />
      </View>

      <View style={estilos.cInput}>

        <TextInput
          label="Peso"
          value={txtPeso}
          onChangeText={setPeso}
        />


      </View>

      <View style={estilos.cBotoes}>
        <Botao texto="Calcular" funcao={calcularIMC} />

        <Botao texto="Limpar" funcao={limpar} />

        <Text style={estilos.resultado}>{txtImc}</Text>
      </View>
    </View>
    </PaperProvider>
  )
}

const estilos = StyleSheet.create({
  imagem: {
    height: '100%',
    width: '65%'
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  texto: {
    fontSize: 36,
    color: '#F15025',
    fontFamily: 'AveriaLibre-Regular'

  },
  textInput: {
    fontSize: 36,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    color: '#F15025'
  },
  cImage: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cInput: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  cBotoes: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10

  },
  cIcones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultado: {
    fontSize: 24,
    color: '#F15025'
  }
})

//Exportação
export default App