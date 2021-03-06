/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
   StyleSheet,
    Text,
     View,
     KeyboardAvoidingView,
     Image,
     TextInput
    } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends React.Component {
  render() {
    return (
      
      <KeyboardAvoidingView behavior = 'padding' style ={styles.wrapper}>
      <Image style = {styles.container} source={require('./img/bg.jpg')}>
      
      </Image>
      </KeyboardAvoidingView>
  
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    flex:1,
    alignSelf :'stretch',
    with :null,

  }


});
