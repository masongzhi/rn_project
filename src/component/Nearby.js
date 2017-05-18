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
  ListView,
  Button,
  Image,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import List from './List'
import { getLocationFind } from  '../service/Util';

class NearbyList extends Component {
  state = {
    initialPosition: 'unknown',
    pois: [{}],
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let initialPosition = JSON.stringify(position);
      // console.error(position.coords)
      const location = `${position.coords.longitude},${position.coords.latitude}`
      this.setState({initialPosition});
      const params = `?city=广州&keywords=培训&location=${location}`;
      getLocationFind(params)
        .then((result) => {
          const pois = result._bodyInit && JSON.parse(result._bodyInit).data && JSON.parse(result._bodyInit).data.pois.length > 0 ? JSON.parse(result._bodyInit).data.pois : null;
          // 更新listView源
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(pois),
          });
        })
    }, (error) => alert(JSON.stringify(error)));
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const pois = this.state.pois;
    this.state.dataSource = ds.cloneWithRows(pois);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <List data={rowData}/>
        }
      />
    );
  }
}

class Nearby extends Component {
  static navigationOptions = {
    title: '附近'
  };

  render() {
    return (
      <NearbyList />
    );
  }

}

const NearbyRoute = StackNavigator({
  Home: { screen: Nearby }
});

export default class index extends Component {
  static navigationOptions = {
    drawerLabel: '附近',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/nearby.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <NearbyRoute />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})

AppRegistry.registerComponent('Nearby', () => index);
