import React, {Component} from 'react';
import Header from '../components/Header';
import {ScrollView} from 'react-native';
import FormLogin from '../components/FormLogin';

class Login extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header navigation={this.props.navigation} />
        <FormLogin navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Login;
