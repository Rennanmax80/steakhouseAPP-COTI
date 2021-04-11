import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//importando a classe de configuração do React Native Paper
import {Provider, DefaultTheme} from 'react-native-paper';

//importando as bibliotecas do react redux
import {createStore, combineReducers} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import shoppingCartReducer from './reducers/shoppingCartReducer';

//registrar o reducer
const rootReducer = combineReducers({
  shoppingCartReducer,
});

//criando a memoria da aplicação(STORE)
const store = createStore(rootReducer);

//definindo o padrão de cores do toolkit
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#bf360c',
    secondary: '#ff5722',
  },
};

//configurando o uso da toolkit no projeto
export default function Main() {
  return (
    <ReduxProvider store={store}>
      <Provider theme={theme}>
        <App />
      </Provider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
