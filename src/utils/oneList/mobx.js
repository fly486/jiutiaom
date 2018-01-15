/**
 * @author: AnBo
 * @Date: 18/1/9 下午4:57
 */

import {observable,computed,action} from 'mobx';
import {screen} from '../../common';
export default class Mobx {

  constructor(itemH = 40,data = []){
    this.data = data
    this.itemH = itemH;
    this.dataLength = data.length;
    this.itemsH = itemH*data.length;
    this.cellNum = Math.floor(screen.height/itemH) + 6
  };
   @observable data = []
  @observable page = 3;
  headerHeight = 0;
  @action onScroll = (e) => {
    let offsetY = e.nativeEvent.contentOffset.y;
    let index = Math.floor((offsetY - this.headerHeight)/this.itemH);
    this.page = Math.max(1,index);
  }
  @action add(data,itemH){
    this.data = data
    this.itemH = itemH;
    this.dataLength = data.length;
    this.itemsH = itemH*data.length;
  }
}