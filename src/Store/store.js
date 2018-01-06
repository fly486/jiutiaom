/**
 * @author: AnBo
 * @Date: 17/12/27 下午5:24
 */

import {observable} from 'mobx';
import  HomeStore from './homeStore'
export default class Store {

  @observable allData = {};
  constructor(){
    this.homeStore = new HomeStore(this)
  };



}
