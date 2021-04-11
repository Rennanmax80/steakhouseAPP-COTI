import axios from 'axios';
import React from 'react';

export const getApiUrl = () => {
  return 'http://apirestaurante-001-site1.itempurl.com';
};

export const getProdutos = () => {
  return axios.get(getApiUrl() + '/api/cardapio').then(response => {
    return response.data;
  });
};
