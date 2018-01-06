

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  Text
} from 'react-native';

import {observer} from 'mobx-react';
import {observable ,computed } from 'mobx';
//import Icon from 'react-native-vector-icons/EvilIcons'

import Mobx from './mobx';
import Items from './items';
//import Top from './top';
const {width,height} = Dimensions.get('window');
//const RIcon = Animated.createAnimatedComponent(Icon)

@observer
export default class MjtList extends Component {



 constructor(props){
   super(props);
   this.mobx = new Mobx(props)
 }

  shouldComponentUpdate(nextProps,nextState){

    this.mobx&&this.mobx.add(nextProps.data)
    this.mobx&&this.mobx.count(nextProps.rowHeight,nextProps.line)
    this.mobx?this.mobx.renderItem = nextProps.renderItem:null
    return false
  }
  render () {
    console.log('root');

    return(
      <Animated.ScrollView
        onTouchStart = {this.mobx.onTouchStart}
        scrollEventThrottle = {15}
        {...this.props} ref = {a => this.ScrollViewRef = a } onScroll={this.mobx.onScroll}>
        <View onLayout={this.mobx.contentLayout} >
            <View onLayout={this.mobx.headerLayout}>
              {this.props.renderHeader&&this.props.renderHeader()}
            </View>
            <Items data = {this.mobx.items}/>
            <Foot foot = {this.mobx}/>

        </View>
      </Animated.ScrollView>
    );
  }
}
function footer(props){
  if(props.foot.isFetchMore){
    props.foot.fetchMore();
    return <View style={{flex:1,height:150,alignItems:'center',justifyContent:'center'}}>
      <Text>正在刷新</Text>
    </View>
  }
  return <View style={{flex:1,height:150,alignItems:'center',justifyContent:'center'}}>
    <Text >上拉加载</Text>
  </View>
}
const Foot = observer(footer)
