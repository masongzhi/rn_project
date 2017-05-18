/**
 * Created by masongzhi on 17-4-23.
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  ListView,
  TouchableNativeFeedback
} from 'react-native';
import { getLocationTextFind } from  '../../service/Util';
import List from '../List'


export default class LocationList extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state && navigation.state.params && navigation.state.params.title
      ? navigation.state.params.title
      : '列表'
  });
  state = {
    initialPosition: 'unknown',
    pois: [{}],
  };
  componentWillMount() {
    const secondKeywords = this.props && this.props.navigation && this.props.navigation.state && this.props.navigation.state.params.title && this.props.navigation.state.params.title !== '全部'
      ? this.props.navigation.state.params.title
      : '';
    const params = `?city=广州&keywords=培训 ${secondKeywords}`;
    getLocationTextFind(params)
      .then((result) => {
        const pois = result._bodyInit && JSON.parse(result._bodyInit).data && JSON.parse(result._bodyInit).data.pois.length > 0 ? JSON.parse(result._bodyInit).data.pois : null;
        // 更新listView源
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(pois),
        });
      })
  }
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const pois = this.state.pois;
    this.state.dataSource = ds.cloneWithRows(pois);
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
            <List data={rowData} />
          }
      />
    )
  }
}

AppRegistry.registerComponent('LocationList', () => LocationList);
