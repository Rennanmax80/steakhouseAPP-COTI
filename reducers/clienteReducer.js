import {Alert} from 'react-native';
import * as actions from '../actions/clienteActions';

//dados que o reducer ira armazenar no state
const initialState = {
  accessToken: '',
  dataExpiracao: '',
  cliente: {
    nome: '',
    email: '',
    telefone: '',
  },
};

//declarando o reducer
// eslint-disable-next-line prettier/prettier
const clienteReducer = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case actions.AUTENTICAR_CLIENTE:
      Alert.alert('Cliente autenticado com sucesso!');

      return {
        ...state,
        accessToken: action.data.accessToken,
        dataExpiracao: action.data.dataExpiracao,
        cliente: action.data.cliente,
      };

    default:
      return state;
  }
};

export default clienteReducer;
