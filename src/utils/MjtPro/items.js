
import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import {observer} from 'mobx-react';
import {observable ,computed } from 'mobx';
import Item from './item'
const {width,height} = Dimensions.get('window')
function Items(props){
  const { data } = props
  console.log('items')
  return (
    <View
      style={{
        height: data[0].rootStore.itemsHeight,
        overflow : 'hidden',
        alignItems:'center',
        width:width
      }}
    >
      {data.map((itm,idx)=>{
        return <Item key = {idx} num = {idx} data = {itm}/>
      })}
    </View>
  )
}
export default observer(Items);