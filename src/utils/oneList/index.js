/**
 * @author: AnBo
 * @Date: 18/1/10 下午2:03
 */
import React , { Component ,PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
  requireNativeComponent,
  Image
} from 'react-native';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import List from './oneList'

var RNTMap = requireNativeComponent('MyView', null);

export default class extends React.Component{

  componentDidMount(){
    this.getMoviesFromApi()
  }
  state = {
    data:[]
  }
  getMoviesFromApi = async() => {
    try {
      let response = await fetch('http://192.168.1.102:3002')
      let responseJson = await response.json();

      this.setState({
        data: responseJson.data.goods
      })

    } catch(error) {
      console.error(error);
    }
  }

  render(){

    return <List data = {this.state.data} itemH = {130} renderItem = {Item111}/>
  }
}




class Item111 extends React.Component{


  shouldComponentUpdate(props){

    if(props.page < props.dataL&&this.data&&props.data ){
      this.RN&&this.RN.setNativeProps({
        name:props.data.name,
        title:props.data.title
      })
      return false
    }
    return true

  }

  render(){
    alert(888)
    this.data = this.props.data
    if(!this.props.data){
      return <View/>
    }
    const {data} = this.props
    const i = this.props.page
    return(
      <View style={{paddingBottom:10,flexDirection:'row',
        borderWidth:0.5,borderColor:'#e0e0e0',backgroundColor:'white',height:130}}>
        <View style={{height:120,width:120}}>


          <Image
            style={{height:120,width:120}}
            source={{
              uri: data.img,
              cache:'force-cache'
            }}

          />


        </View>
        <View style={{flex:1,paddingLeft:10}}>
          <Text>{this.props.id}</Text>
          <RNTMap style={{flex:1}} ref = {ref=>this.RN = ref} name = {data.name} title = {data.tbid}/>


        </View>
      </View>
    )
  }
}



