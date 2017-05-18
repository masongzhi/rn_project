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

class Exercise extends Component {
  static navigationOptions = {
    title: '习题'
  };
  state = {initialPosition: 'unknown'};

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var initialPosition = JSON.stringify(position);
      this.setState({initialPosition});
    }, (error) => alert(JSON.stringify(error)));
  }

  render() {
    return (
      <View>
        <Text>这是习题</Text>
        <Text>{this.state.initialPosition}</Text>
      </View>
    )
  }
}

const ExerciseRoute = StackNavigator({
  Home: { screen: Exercise }
});

export default class index extends Component {
  static navigationOptions = {
    drawerLabel: '习题',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/exercise.png')}
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
