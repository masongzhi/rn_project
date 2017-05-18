/**
 * Created by masongzhi on 17-4-20.
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Button,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Forum extends Component {
  static navigationOptions = {
    title: '讨论区'
  };

  render() {
    return (
      <Text>这是讨论区</Text>
    )
  }
}

const ForumRoute = StackNavigator({
  Home: { screen: Forum }
});

export default class index extends Component {
  static navigationOptions = {
    drawerLabel: '讨论区',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/forum.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <ForumRoute />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

AppRegistry.registerComponent('Forum', () => index);
