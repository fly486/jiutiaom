/**
 * @author: AnBo
 * @Date: 18/1/9 下午5:00
 */
import React , { Component ,PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    requireNativeComponent
} from 'react-native';
import {observable,computed,autorun} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class Cell extends Component{

  constructor(props){
    super(props);
    let arr = []
    for(let i =0 ;i<1000;i++){
      let now = i%props.mobx.cellNum;
      let next = props.id - now  ;
      if (next < 0){
        next = props.mobx.cellNum + next;
      }
      let page = i + next -3;
      arr.push(page)
    }
    this.arr = arr

  };
  arr = []
  @computed get Page () {
    return this.arr[this.props.mobx.page]
  }


  render(){
    console.log(`cell${this.props.id}`)
    const {data,itemH} = this.props.mobx;
    const RItem = this.props.renderItem

      return(
        <View  style={{height:itemH,width:375,position:'absolute',top:this.Page*itemH}}>
          <RItem  data = {this.props.mobx.data[this.Page]} page = {this.Page} dataL = {this.props.mobx.data.length}/>
        </View>
      )
  };
}
