/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './src/component/Home';
import Nearby from './src/component/Nearby';
import Exercise from './src/component/Exercise';
import Forum from './src/component/Forum';

const Router = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Nearby: {
    screen: Nearby,
  },
  Exercise: {
    screen: Exercise,
  },
  Forum: {
    screen: Forum,
  },
});

export default class rn_project extends Component {
  render() {
    return (
      <Router />
    )
  }
}


AppRegistry.registerComponent('rn_project', () => rn_project);
