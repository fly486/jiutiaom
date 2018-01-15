/**
 * @author: AnBo
 * @Date: 18/1/2 上午6:11
 */
import React , { Component ,PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated
} from 'react-native';
import {observer} from 'mobx-react';
import {observable ,computed } from 'mobx';

const styles = StyleSheet.create({
 
 });

@observer
export default class Images extends Component{


constructor(props){
  super(props);
  this.viewopcity = new Animated.Value(0.5)
  this.imgOpcity = new Animated.Value(1)
}



  _onLoad = () => {
    Animated.timing(this.imgOpcity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true, // <-- 加上这一行
    }).start();
  }
  @computed get sx(){
    if(this.props.root.speed > 5){
      this.imgOpcity.setValue(1);
    }
    return false
  }
  render(){

      this.imgOpcity.setValue(1);
      return <Animated.View
        style={[this.props.style]}
        sx = {this.sx}
      >
        <Image source={this.props.source} style={this.props.style} onLoad ={this._onLoad } />
        <Animated.Image
          source={this.props.defaultSource}
          style={[this.props.style,{backgroundColor:'white',position:'absolute',opacity:this.imgOpcity}]}/>
      </Animated.View>
  };
}