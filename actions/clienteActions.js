//Nome da ação
export const AUTENTICAR_CLIENTE = 'autenticar_cliente';

//Função para chamada da ação

export const Autenticar = dados => ({
  type: AUTENTICAR_CLIENTE,
  data: dados,
});
