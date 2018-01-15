import React , {Component} from 'react'
import {Image ,Platform ,View,Text} from 'react-native';
const resolveAssetSource = require('resolveAssetSource')
export default class MyImage extends Image {
  viewConfig = Object.assign({} , this.viewConfig, {
    validAttributes: Object.assign(
      {},
      this.viewConfig.validAttributes,
      {[Platform.OS === 'ios' ? 'source' : 'src']: true})
  });

  constructor() {
    super();
    this.setNativeProps = (props = {}) => {

      if (props.source) {
        const source = resolveAssetSource(props.source);
        let sourceAttr = Platform.OS === 'ios' ? 'source' : 'src';
        let sources;
        if (Array.isArray(source)) {
          sources = source;
        } else {
          sources = [source];
        }
        Object.assign(props, {[sourceAttr]: sources});
      }

      return super.setNativeProps(props);
    }
  }
}


// 实现
 class TestDemo extends Component {

  // 设置source
  _setSource = ()  => {
    this._refImg.setNativeProps({
      source: {uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2478206899,4000352250&fm=80&w=179&h=119&img.JPEG'}
    });
  }

  render() {
    return(
      <View >
        <Text onPress={this._setSource}>88888</Text>
      <MyImage
        ref={c => this._refImg = c}
        style={{width:80,height:80}}
        source={{uri: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3497889018,3008123053&fm=80&w=179&h=119&img.JPEG'}} />
      </View>
        )
  }

}