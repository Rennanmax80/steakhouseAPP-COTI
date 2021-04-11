import * as actions from '../actions/shoppingCartActions';

const initialState = {
  itens: [], //produtos add na cesta de compras
  valorTotal: 0, //valor total da cesta
  quantidadeItens: 0, //quantidade itens adicionados na cesta
};

//declarando o reducer

const shoppingCartReducer = (
  state = initialState, //dados que serao armazenados
  action, //acoes que o componente ira escutar
) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      //TODO
      return state;

    default:
      //TODO
      return state;
  }
};

export default shoppingCartReducer;
