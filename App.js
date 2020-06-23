import React from 'react';
import { StyleSheet, Text, View, Scrollview} from 'react-native';

import Header from './app/components/header';
export default class App extends React.Components {
  render () {
    return (
    <Scrollview style={styles.container}>
           <Header />   
    </Scrollview>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  } 
});
