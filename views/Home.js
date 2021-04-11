import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import Header from '../components/Header';
import Products from '../components/Products';

class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header
          //acessar a stacknavigation do app.js
          navigation={this.props.navigation}
        />
        <Products navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Home;
