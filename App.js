import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Coleta from "./src/screens/Coleta";
import Agradecimento from "./src/screens/Agradecimento";
import Calculadora from "./src/screens/Calculadora";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Coleta" screenOptions={{headerTintColor: 'bluse', headerTitle: 'teste', headerStyle: {backgroundColor: 'gray'}}}>
      <Stack.Screen name="Coleta" component={Coleta} options={{headerShown: false}}/>
      <Stack.Screen name="Agradecimento" component={Agradecimento} options={{headerShown: false}}/>
      <Stack.Screen name="Calculadora" component={Calculadora}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App