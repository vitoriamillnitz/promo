import { TextInput, Text, View, StyleSheet} from "react-native";

const Input = (props) => {

    const titulo = props.titulo;
    const placeholder = props.placeholder;
    const msgErro = props.msgErro;

    return(
        <View style={estiloInp.container}>
            <Text style={estiloInp.text}>{titulo}</Text>
            <TextInput  placeholder={placeholder} style={estiloInp.textInput} onChangeText={props.onChangeText}/>
            <Text style={estiloInp.textErro}>{msgErro}</Text>
        </View>
    )
}

const estiloInp = StyleSheet.create({
    container: {
        width: '70%',
        marginBottom: 20
    },
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
})


export default Input