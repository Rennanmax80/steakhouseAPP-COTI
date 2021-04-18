/*
    Nome da Ação: Adicionar um item no carrinho de compras
    REMOVE_ITEM: remover um item do carrinho de compras
*/
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';

/*
    Criando a função que será disparada na ação
*/
export const adicionarItem = item => ({
  type: ADD_ITEM,
  data: item,
});

export const removerItem = item => ({
  type: REMOVE_ITEM,
  data: item,
});
