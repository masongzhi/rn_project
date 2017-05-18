/**
 * Created by masongzhi on 17-4-23.
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  FlatList,
  Image,
  TouchableNativeFeedback
} from 'react-native';

export default class Introduction extends Component {
  render() {
    return (
      <View>
        <Image />
        <Text>11</Text>
        <View>
          <Image />
          <Text>22</Text>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('Introduction', () => Introduction);
