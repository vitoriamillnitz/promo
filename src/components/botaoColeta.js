import { TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const BotaoColeta = (props)=>{

    const iconName = props.iconName;
    const tocar = props.tocar;
    const text = props.text;
    const cor = props.cor;
    


return(
    <TouchableOpacity style={style.area} onPress={tocar}>
        <Icon name={iconName} size={60} color={cor}></Icon>
        <Text style={[style.text, {textAlign: 'center'}]}>{text}</Text>

    </TouchableOpacity>
)
}
const style = StyleSheet.create({
    area:{
        padding:20,
        justifyContent: 'center',
        alignItems:'center',
        width:140,
        borderRadius:10,

    },
    text: {
        padding:'10',
        color:'white',
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        textAlign:'center',

      },
})

export default BotaoColeta