
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';

import Header from '../index'
import M from './MjtPro'
import Images from './Images'
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

  renderItem111 = (data,i,root) => {


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
          <View style={{flex:1,paddingTop:5}}>
            <Text style={{fontSize:16,}} >{data.name}</Text>
          </View>
          <View style={{flex:1,justifyContent:'space-around'}}>
            <Text  style={{color:"#dc143c",fontSize :20}}><Text style={{fontSize :10}} >¥</Text>{data.shop_pric}      <Text style={{fontSize:10,color:"#c0c0c0"}} >{data.goods_weight}kg</Text></Text>
            <Text style={{fontSize:13,color:"#c0c0c0"}} >{data.goods_brief}+++{i}</Text>
          </View>

        </View>
      </View>
    )
  };

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
          renderItem={this.renderItem111}
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


