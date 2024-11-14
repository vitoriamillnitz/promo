import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const irPara = () => {
        props.navigation.navigate('Calculadora')

    }


    return (
        <View>
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

export default Login