import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BotaoColeta from "../components/botaoColeta"

const Coleta = (props) => {

    const goToAgradecimento = () => {
        props.navigation.navigate('Agradecimento')
    }

    return (
        <ScrollView style={style.scrollView}>

            <Text style={style.text}> O que voce achou do evento? </Text>  
            
            <View style={style.view}>
                <BotaoColeta iconName='mood-bad' text='Pessimo' cor='#d71616' tocar={goToAgradecimento}/>
                <BotaoColeta iconName='sentiment-dissatisfied' text='Ruim' cor='#ff360a' tocar={goToAgradecimento}/>
                <BotaoColeta iconName='sentiment-neutral' text='Neutro' cor='#ffc632' tocar={goToAgradecimento}/>
                <BotaoColeta iconName='sentiment-satisfied' text='Bom' cor='#37bd6d' tocar={goToAgradecimento}/>
                <BotaoColeta iconName='mood' text='Excelente' cor='#25bc22' tocar={goToAgradecimento}/>
            </View>
        
 
        </ScrollView>
    )
}

const style = StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'center',
        padding: '55',
        
    },
    text: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 35,
        color: '#FFFFFF',
        textAlign: 'center', 
        marginTop: 40,    
        width: '100%',
    },
    scrollView: {
        backgroundColor: '#372775', 
        flex: 1,
        
      },
})

export default Coleta;
