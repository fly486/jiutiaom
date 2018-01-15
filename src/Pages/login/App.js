import React, { Component } from 'react';
import { requireNativeComponent ,View,Text} from 'react-native';

export default class MyView extends Component {
 a = 1;
  b = 10;

  o = () => {

  setInterval(()=>{
    this.ref.setNativeProps({name:(this.a++).toString(),title:(this.b++).toString()})
  },1)
}
  render() {
    return (
      <View >

      </View>)
        }
}