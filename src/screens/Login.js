import { View, StyleSheet, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'



const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const irPara = () => {
        props.navigation.navigate('Calculadora')

    }


    return (
        <View style={estilos.view}>
            <View>
            <Icon name="mood" size={60} color="#000000" />
            <Text>Satisfying.you</Text>
            </View>
                <TextInput
                    value={email} 
                    onChangeText={setEmail}
                    label="email"
                    placeholder='email'
                />
                 <TextInput
                    value={password} 
                    onChangeText={setPassword}
                    label="senha"
                    placeholder='senha'
                />
                <Button onPress={irPara}>
                    entrar
                </Button>
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        padding: 80,
        backgroundColor: "#372775"
    },
})


export default Login