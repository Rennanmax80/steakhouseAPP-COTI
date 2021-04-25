import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import FormRegister from '../components/FormRegister';
import Header from '../components/Header';

class Register extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header navigation={this.props.navigation} />
        <FormRegister navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Register;
