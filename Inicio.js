import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Inicio extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text> Contador </Text>
        </View>
        
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2688A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Inicio;