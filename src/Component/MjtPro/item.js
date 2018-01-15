
import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
  InteractionManager,
  PanResponder
} from 'react-native';
import {observable ,computed,action } from 'mobx';
import {observer} from 'mobx-react';
const {width,height} = Dimensions.get('window')
@observer
export default class Item extends React.Component{

  @computed get nowTop () {
    const {data } = this.props;
    const page = data.arr[data.rootStore.page];
      this.viewRef&&this.viewRef.setNativeProps({
        top:page*data.rootStore.itemhw.itemH
      })
    return page;
  }
render(){
    const {data} = this.props;
    console.log(`item${this.props.num}`)
    const start = this.nowTop*data.rootStore.itemhw.rowNum;
    const end = start+data.rootStore.itemhw.rowNum;

    const Row = data.rootStore.renderItem
    const cell =  data.rootStore.data.slice(start,end).map((item,idx)=>{
      return <View key = {idx}><Row
        refshItem = {data.rootStore.refshItem}
        page = {this.nowTop} data = {item} i ={idx+start} /></View>
    })
    return (

      <View
        nowTop = {this.nowTop}
        ref = {ref=>  this.viewRef =ref}
        style = {[data.rootStore.itemhw.line !==1?styles.container:null,{ position:'absolute',width:width,top:this.props.num*data.rootStore.itemhw.itemH }]}>

        {cell}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexWrap:'wrap',
    flexDirection:'row',
    //justifyContent:'center',
  },
});