import React from 'react';
import {View} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';

class ItemsShoppingCart extends React.Component {
  render() {
    var self = this;

    return (
      <View>
        <Card>
          <Card.Title
            title="Cesta de Compras"
            subtitle="Gerencie os itens do seu pedido"
          />
          <Card.Content>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Title>Valor total: 0,00</Title>
              <Paragraph>Quantidade de itens: 0</Paragraph>
            </View>

            <View style={{marginTop: 20}}>
              <Button mode="contained" icon="cart-outline">
                Finalizar Pedido
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

export default ItemsShoppingCart;
