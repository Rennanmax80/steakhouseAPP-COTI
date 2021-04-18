import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//importando a classe de configuração do React Native Paper
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

//importando as bibliotecas do react redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

//importando o REDUCER (componente do react-redux que irá acessar
//e incluir ou modificar dados na STORE (memoria do app))
import shoppingCartReducer from './reducers/shoppingCartReducer';

//registrar o reducer
//NOME_DO_REDUCER : componente REDUCER
const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
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
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
