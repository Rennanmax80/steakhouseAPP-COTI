import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, Paragraph, Button} from 'react-native-paper';
import * as services from '../services/apiServices';
import {connect} from 'react-redux';

class Products extends React.Component {
  //construtor
  //utilizado para declarar o state do componente

  constructor(props) {
    super(props);

    //declarando o state
    this.state = {
      //armazenar os produtos obtidos da API
      products_list: [],
    };
  }

  //funcção executada antes do componente renderizar o seu conteudo (before render)
  componentDidMount() {
    // eslint-disable-next-line prettier/prettier
    services.getProdutos()
      .then(data => {
        this.setState({
          products_list: data,
        });
      })
      .catch(e => {
        Alert.alert(e.response);
      });
  }

  adicionarProdutos() {
    //navegar para a pagina de carrinho de compras
    this.props.navigation.navigate('ShoppingCart');
  }

  render() {
    var self = this;
    return (
      <View>
        <Card style={{backgroundColor: '#eee'}}>
          <Card.Content>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Conheça nosso cardápio
            </Text>
            <Text style={{fontSize: 14}}>
              Selecione os itens e faça seu pedido
            </Text>
            <Text style={{fontSize: 14}}>
              {self.state.products_list.length} itens exibidos
            </Text>
          </Card.Content>
        </Card>

        {self.state.products_list.map(function (item, i) {
          return (
            <Card key={i}>
              <Card.Title title={item.nome} subtitle={item.preco} />
              <Card.Content>
                <Text style={{fontWeight: 'bold', fontSize: 13}}>
                  {item.categoria.nome}
                </Text>
                <Paragraph style={{marginBottom: 10}}>
                  {item.descricao}
                </Paragraph>
              </Card.Content>
              <Card.Cover source={{uri: services.getApiUrl() + item.foto}} />
              <Card.Actions>
                <Button
                  style={{fontWeight: 'bold'}}
                  mode="outlined"
                  icon="cart-outline"
                  onPress={() => self.adicionarProdutos()}>
                  Adicionar produto
                </Button>
              </Card.Actions>
            </Card>
          );
        })}
      </View>
    );
  }
}

export default connect()(Products);
