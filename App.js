import React from 'react';
import {ScrollView} from 'react-native';
import Header from './components/Header';
import Products from './components/Products';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header />
        <Products />
      </ScrollView>
    );
  }
}

export default App;
