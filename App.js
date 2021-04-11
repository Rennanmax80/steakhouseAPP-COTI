import React from 'react';
import Products from './components/Products';

// componentes usados como tela
import Checkout from './views/Checkout';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ShoppingCart from './views/ShoppingCart';

//bibliotecas de navegacao do react native

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// criando a stack de navegacao

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
