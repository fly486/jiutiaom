
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  requireNativeComponent
} from 'react-native';

var RNTMap = requireNativeComponent('MyView', null);
import Header from '../index'
import M from './MjtPro'
import MyImage from './Images'
const {height,width} = Dimensions.get('window')
export default class ListViewDemo0 extends Component {

  constructor(props){
    super(props)
    this.state = {
      data:[],
      one:true
    }
  }
  /*

   */



  componentDidMount (){
    this.getMoviesFromApi()
  }
  async getMoviesFromApi() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
     /* let response = await fetch('http://www.mjt520.shop:3002/graphql', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {goods{
                    goods_name,
                    shop_pric,
                    goods_weight,
                    goods_num,
                    goods_brief,
                    goods_img
              }}`,

        })
      });*/
      let response = await fetch('http://192.168.1.102:3002')
      let responseJson = await response.json();

      this.state.data.splice(this.state.length,0,...responseJson.data.goods)
      this.setState({
        data:this.state.data
      })

    } catch(error) {
      console.error(error);
    }
  }

  renderItem222 = (data) => {


    return(
      <View style={{width:width/2,height:255,paddingBottom:10 }}>
        <View style={{height:160,width:width/2-15,left:5}}>
          <Image

            source={{uri:data.img }} style={{flex:1}}/>
        </View>

        <Text style={{fontSize:16,}} >{data.name}</Text>

        <View style={{flex:1,justifyContent:'space-around'}}>
          <Text  style={{color:"#dc143c",fontSize :20}}><Text style={{fontSize :10}} >¥</Text>{data.shop_pric}      <Text style={{fontSize:10,color:"#c0c0c0"}} >{data.goods_weight}kg</Text></Text>
          <Text style={{fontSize:13,color:"#c0c0c0"}} >{data.goods_brief}</Text>
        </View>

      </View>

    )
  };
  fetchMore = async () =>{
    this.getMoviesFromApi()
  }

  _onRefresh = () =>{
    this.getMoviesFromApi()
  };

  _onPress = () =>{
    let one = this.state.one
    this.setState({one:!one})
  }
  _renderHeader = () =>{
    return <View><Header/>
      <View style={{height:20}}/>
      <Text  onPress={this._onPress}>dian</Text>
    </View>
  }
  render () {
    if(this.state.one){
      return (
        <M
          line = {1}
          rowHeight = {130}
          onRefresh = {this.onRefresh}
          renderHeader={this._renderHeader}
          data = {this.state.data}
          renderItem={Item111}
          fetchMore = {this.fetchMore}

        />
      )
    }

    return (
      <M
        line = {2}
        rowHeight = {160}
        onRefresh = {this.onRefresh}
        renderHeader={this._renderHeader}
        data = {this.state.data}
        renderItem={this.renderItem222}
        fetchMore = {this.fetchMore}

      />
    )
  }
}

class Item111 extends React.Component{
  page = this.props.page
  shouldComponentUpdate(props){
    if(props.page === this.page){
      return false;
    }
    this.page = props.page;
    this.ref.setNativeProps({
      title:props.data.name,
      name:props.data.tbid,
      icon:props.data.img
    })
    return false;
  }
  render(){
    const {data,i} = this.props
    return(
      <View style={{paddingBottom:10,flexDirection:'row',
        borderWidth:0.5,borderColor:'#e0e0e0',backgroundColor:'white',height:130}}>
        
        <View style={{flex:1,paddingLeft:3}}>
          <RNTMap ref = {ref=>this.ref = ref}icon = {data.img} title = {data.name} name = {data.tbid}/>


        </View>
      </View>
    )
  }
}
