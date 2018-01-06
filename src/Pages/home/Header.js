
import React from 'react';
import {View, Image} from 'react-native'
import {screen} from '../../common'
import api from '../../utils/api'
import MenuSVG from '../../utils/menuSVG'
import {Carousel} from 'antd-mobile'
import MenuView from '../../Component/menu'

export default class extends React.Component {
  onMenuSelected = (num) =>{
    alert(api.menuInfo[num])
  }
  render() {
    return (
      <View>
        <View>
          <Carousel
            dotStyle = {{width:15,height:4}} //
            dotActiveStyle = {{width:15,height:4}} //now
            infinite autoplay >
            <Image source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4038754770,3141776433&fm=27&gp=0.jpg',cache: 'force-cache'}}
              style={{height:200,width:screen.width}}/>
            <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509557204777&di=07e81634fb14ec69cdedccecf394345b&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130810%2F13339320_160024575177_2.jpg',cache: 'force-cache'}}
              style={{height:200,width:screen.width}}/>
            <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509557204776&di=cc2828592aa3a031b418021181070202&imgtype=0&src=http%3A%2F%2Fpic34.nipic.com%2F20131017%2F8821914_150745393169_2.jpg',cache: 'force-cache'}}
              style={{height:200,width:screen.width}}/>
          </Carousel>
          <MenuSVG style={{position:'absolute',bottom:0}}/>
        </View>
        {
          /*
           * menu
           *
           * */
        }
        <MenuView menuInfos={api.menuInfo.splice(0,5)} onMenuSelected={this.onMenuSelected} />
      </View>
    )
  }
}