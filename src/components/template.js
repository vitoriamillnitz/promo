import { StyleSheet } from "react-native";

const templateStyle = StyleSheet.create({
    container: {
        flexGrow: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        padding:10,
        backgroundColor: `#372775`
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
    }
})

export default templateStyle;