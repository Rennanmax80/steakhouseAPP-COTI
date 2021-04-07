import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//importando a classe de configuração do React Native Paper
import {Provider, DefaultTheme} from 'react-native-paper';

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
    <Provider theme={theme}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
