
import React ,{Component} from 'react';
import {Text ,FlatList ,View} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Mjt from '../../Component/MjtPro'
export default class Home extends Component {
  constructor(props){
    super(props);

  }

  static navigatorStyle = {

    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarHidden:true,
    navBarTransparent:true,
    // screenBackgroundColor:'transparent',
  };
  render () {

    return <Mjt/>
  }
}
