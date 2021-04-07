import React from 'react';
import {View, Text} from 'react-native';
import {Card, Paragraph, Button} from 'react-native-paper';

class Products extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <Card.Content>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Conheça nosso cardápio
            </Text>
            <Text style={{fontSize: 14}}>
              Selecione os itens e faça o seu pedido
            </Text>
          </Card.Content>
        </Card>

        <Card>
          <Card.Title title="Nome do Produto" subtitle="R$ 0,00" />
          <Card.Content>
            <Paragraph>Descrição do produto.</Paragraph>
          </Card.Content>
          <Card.Cover
            source={{
              uri:
                'http://apirestaurante-001-site1.itempurl.com//images/Outback-Fries_305x342-225x255.png',
            }}
          />
          <Card.Actions>
            <Button style={{fontWeight: 'bold'}}>Adicionar ao pedido</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  }
}

export default Products;
