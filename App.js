import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Coleta from "./src/screens/Coleta";
import Agradecimento from "./src/screens/Agradecimento";
import NovaConta from "./src/screens/NovaConta";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="NovaConta" component={NovaConta} options={{headerTintColor: '#573FBA', headerTitle: 'Nova Conta', headerStyle: {backgroundColor: '#2B1D62'}, headerTitleStyle: {fontFamily: 'AveriaLibre-Regular', fontSize: 33, color: '#FFFFFF'} }}/>
      <Stack.Screen name="Coleta" component={Coleta} options={{headerShown: false}}/>
      <Stack.Screen name="Agradecimento" component={Agradecimento} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App