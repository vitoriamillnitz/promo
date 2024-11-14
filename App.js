import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Calculadora from "./src/screens/Calculadora";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: 'bluse', headerTitle: 'teste', headerStyle: {backgroundColor: 'gray'}}}>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Calculadora" component={Calculadora}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App