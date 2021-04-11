/*
    Nome da Ação: Adicionar um item no carrinho de compras
*/
export const ADD_ITEM = 'add_item';

/*
    Criando a função que será disparada na ação
*/
export const adicionarItem = item => ({
  type: ADD_ITEM,
  data: item,
});
