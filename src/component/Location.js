/**
 * Created by masongzhi on 17-4-21.
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

export default class index extends Component {
  static navigationOptions = {
    drawerLabel: '习题',
    drawerIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <ExerciseRoute />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

AppRegistry.registerComponent('Exercise', () => index);
