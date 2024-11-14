import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

function validarEmail(email) {
  const valida = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return valida.test(email);
}

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');  

    const irPara = () => {
        if (!validarEmail(email)) {
            setErro('E-mail e/ou senha inválidos.');
        } else {
            setErro(''); 
            props.navigation.navigate('Calculadora');
        }
    };

    return (
        <View style={estilos.view}>
            <View style={estilos.container}>
                <View style={estilos.viewTitulo}>
                    <Text style={estilos.titulo}>Satisfying.you</Text>
                </View>
                <View style={estilos.viewIcon}>
                    <Icon name="sentiment-satisfied" size={32} color="#FFFFFF" />
                </View>
            </View>

            <View style={estilos.textContainer}>
                <Text style={estilos.tituloInput}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={estilos.textInput} 
                    mode="outlined" 
                    theme={{
                        colors: {
                            primary: '#3F92C5', 
                            background: 'white', 
                            placeholder: '#3F92C5', 
                        },
                    }}
                />

                <Text style={estilos.tituloInput}>Senha</Text>
                <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    style={estilos.textInput} 
                    mode="outlined" 
                    theme={{
                        colors: {
                            primary: '#3F92C5',
                            background: 'white',
                            placeholder: '#3F92C5', 
                        },
                    }}
                />
                {erro ? <Text style={estilos.erroText}>{erro}</Text> : null}
            </View>

            {/* Botão com TouchableOpacity */}
            <TouchableOpacity 
                onPress={irPara} 
                style={estilos.button}>
                <Text style={estilos.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {/* Novo botão 1 - Azul */}
            <TouchableOpacity 
                onPress={() => alert("Botão 1 clicado")} 
                style={estilos.buttonBlue}>
                <Text style={estilos.buttonText}>Criar minha conta</Text>
            </TouchableOpacity>

            {/* Novo botão 2 - Cinza */}
            <TouchableOpacity 
                onPress={() => alert("Botão 2 clicado")} 
                style={estilos.buttonGray}>
                <Text style={estilos.buttonText}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    );
};

const estilos = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#372775',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    viewTitulo: {
        alignItems: 'center',
    },
    viewIcon: {
        marginLeft: 20,
    },
    titulo: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32,
        fontWeight: '400',
        lineHeight: 30,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    textContainer: {
        width: '70%',
        alignItems: 'center',
    },
    textInput: {
        width: '100%', 
        height: 35,
        marginBottom: 4,
        color: '#3F92C5',
    },
    tituloInput: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'left', 
        marginBottom: 1,    
        width: '100%', 

    },
    button: {
        width: '70%', 
        height: 35,
        marginBottom: 14,
        marginTop: 3,
        backgroundColor: '#37BD6D',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 17,
        color: '#FFFFFF',  
        textAlign: 'center',
    },
    buttonBlue: {
        width: '70%',
        height: 22,
        marginBottom: 3,
        marginTop: 19,
        backgroundColor: '#3F92C5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGray: {
        width: '70%',
        height: 22,
        marginBottom: 7,
        marginTop: 3,
        backgroundColor: '#B0B0B0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    erroText: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 13,
        color: '#FF6B6B',
        textAlign: 'left', 
        marginTop: 0,
        marginBottom: 10,
        width: '100%', 
    },
});

export default Login;
