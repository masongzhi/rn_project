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
import { StackNavigator } from 'react-navigation';
import { getLocationTextFind } from  '../service/Util';
import List from './List';
import LocationList from './secondary/LocationList';

class Home extends Component {
  static navigationOptions = {
    title: '首页',
  };
  state = {
    initialPosition: 'unknown',
    pois: [{}],
  };
  componentWillMount() {
    const params = `?city=广州&keywords=培训`;
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
    const {navigate} = this.props.navigation;
    const grid_layout_data = [
      {text: '化妆', source: require('../assets/化妆.png')},
      {text: '驾校', source: require('../assets/车.png')},
      {text: '书法', source: require('../assets/书法.png')},
      {text: '留学', source: require('../assets/飞机.png')},
      {text: '吉他', source: require('../assets/吉他.png')},
      {text: '会计', source: require('../assets/计算机.png')},
      {text: '古琴', source: require('../assets/古琴.png')},
      {text: '烹饪', source: require('../assets/心.png')},
      {text: '架子鼓', source: require('../assets/鼓队.png')},
      {text: '全部', source: require('../assets/全部.png')},
    ];

    const row_list = [
      {text: '英语', source: require('../assets/en.png'), backgroundColor: '#00E062'},
      {text: '钢琴', source: require('../assets/piano.png'), backgroundColor: '#00DFB3'},
      {text: '美术', source: require('../assets/art.png'), backgroundColor: '#00CBCF'},
      {text: '职业技术', source: require('../assets/tech.png'), backgroundColor: '#00A8F0'},
    ];

    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderHeader={()=>{
            return(
              <View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10}}>
                {
                  row_list.map((data, i) =>
                    <TouchableNativeFeedback
                      key={i}
                      onPress={() => navigate('LocationList', {title: data.text, name: i})}>
                      <View
                        style={[styles.row_list, {backgroundColor: data.backgroundColor}]}>
                        <Image
                          source={data.source}
                          style={{resizeMode: 'contain', height: 30}}/>
                        <Text style={styles.row_list_text}>{data.text}</Text>
                      </View>
                    </TouchableNativeFeedback>
                  )
                }
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 22, marginBottom: 22}}>
                {
                  grid_layout_data.map((data, i) =>
                    <TouchableNativeFeedback
                      key={i}
                      onPress={() => navigate('LocationList', {title: data.text, name: i})}>
                      <View style={styles.grid_layout}>
                        <Image
                          source={data.source}
                          style={{resizeMode: 'contain', height: 30}}/>
                        <Text style={{textAlign: 'center'}}>{data.text}</Text>
                      </View>
                    </TouchableNativeFeedback>
                  )
                }
                </View>
              </View>
            )
          }}
          renderRow={(rowData) =>
            <List data={rowData} />
          }
        />
      </View>
    )
  }
}

const HomeRoute = StackNavigator({
  Home: { screen: Home },
  LocationList: {
    screen: LocationList,
    path: 'list/:name',
  },
});

export default class index extends Component {
  static navigationOptions = {
    drawerLabel: '首页',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <HomeRoute />
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  grid_layout: {
    width: 70,
    minHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row_list: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  row_list_text: {
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',
  }

});

AppRegistry.registerComponent('Home', () => index);
