import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numero: 2
    }
  }
  Aumentar = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  Disminuir = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Inicio name='Calculadora' />
        <Body numero={this.state.numero} />
        <Final sumar ={this.Aumentar} disminuir= {this.Disminuir}/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;