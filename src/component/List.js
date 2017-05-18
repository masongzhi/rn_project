/**
 * Created by masongzhi on 17-4-22.
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class List extends Component {
  calDistance(dis) {
    dis = Number(dis);
    if (dis && dis < 1000) {
      return dis + '米'
    } else if (!dis) {
      return '';
    } else {
      return '>' + Math.floor(dis/1000) + 'km'
    }
  }
  photo(pic) {
    if (pic && pic.length > 0 && pic[0].url) {
      return pic[0].url
    }
    // return 'http://news.youth.cn/jy/201704/W020170417555291516351.jpg'; //达康书记
    return 'http://www.studyrefill.com.hk/wp-content/uploads/2016/03/FB_IMG_1458897612121.jpg'; //达康书记
  }
  render() {
    return (
      <View style={{marginBottom: 15, backgroundColor: '#ffffff'}}>
        <View
          style={[styles.border_bottom, {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={[styles.flex_left, {padding: 10}]}>
            <Image source={{uri: this.photo(this.props.data.photos)}} style={{flex:1,width:80, resizeMode: Image.resizeMode.cover}}/>
          </View>
          <View style={[styles.store, styles.paddingTB]}>
            <Text style={styles.store_title}>{this.props.data.name}</Text>
            <View>
              <Text style={styles.store_type}>类型： {this.props.data.type}</Text>
              <Text>位置： {this.calDistance(this.props.data.distance)} {this.props.data.adname}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.border_bottom, {flexDirection: 'row', paddingTop: 5, paddingBottom: 10}]}>
          <View style={styles.flex_left}>
            <Text style={{color: '#00D2AA', textAlign: 'right'}}>￥19.9</Text>
            <Text style={{color: '#9d9d9d', textAlign: 'right'}}>门市价￥280</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>[珠江新城]单人钢琴/小吉他体验课</Text>
          </View>
        </View>
        <View style={[styles.paddingTB, {flexDirection: 'row', justifyContent: 'center'}]}>
          <Text style={{color: '#00D2AA', fontSize: 15}}>查看其他2个团购</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex_left: {
    width: 100,
    paddingRight: 20,
  },
  paddingTB: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  store: {
    flex: 1,
    paddingRight: 10,
  },
  store_title: {
    fontSize: 15,
    color: '#000000'
  },
  store_type: {
    color: '#9d9d9d'
  },
  border_bottom: {
    borderBottomColor: '#9d9d9d',
    borderBottomWidth: 1,
  }
});

AppRegistry.registerComponent('List', () => List);
