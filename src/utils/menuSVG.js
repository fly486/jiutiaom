/**
 * @author: AnBo
 * @Date: 18/1/7 上午12:47
 */
import React from 'react';
import {View} from 'react-native'
import Svg,{
  Path,
} from 'react-native-svg';
import { screen } from '../common'
export default (props) => {
    const { width } = screen;
    return (
      <View {...props}>
        <Svg style={{width:width,height:30 ,position:'absolute',bottom:0}}

        >
          <Path
            id="path"
            d={`M-${80} 0 Q${width/2} 60 ${width+80} 0 v40 L0 30 `}
            fill="white"
          />
        </Svg>
      </View>
    )

}
