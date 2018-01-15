/**
 * @author: AnBo
 * @Date: 18/1/9 下午4:51
 */
import React , { Component ,PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
  ScrollView,
  requireNativeComponent,
  Image
} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Cell from './cell'
import Mobx from './mobx'


 export default class Index extends Component{

  constructor(props){
    super(props);
    this.mobx = new Mobx(props.itemH,props.data);

  };

   shouldComponentUpdate(nextProps){
     this.mobx&&this.mobx.add(nextProps.data,nextProps.itemH)
     return true
   }
  render(){
   const cell = []
     for(let i = 0;i<this.mobx.cellNum;i++){
        cell.push(<Cell id ={i} key = {i } mobx = {this.mobx} renderItem = {this.props.renderItem}/>)
     }

    return <ScrollView
    onScroll={this.mobx.onScroll}
      scrollEventThrottle = {1}
    >
      <View style={{height:this.mobx.itemsH}}>
        {cell}
      </View>
    </ScrollView>
  };
}
