

import {observable ,computed,action } from 'mobx';
import {
  View,
  Dimensions,
} from 'react-native';
const {width,height} = Dimensions.get('window');


export default class Store {

  @observable data = []

  contentHeight = 0;
  headerHeight = 0;
  @observable isFetchMore = false;
  @observable page = 1;
  itemhw;
  contentOffsetY = 0;
  lastScrollTime = 1;

  refshItem = true;
  constructor(props){
    this.Props = props;
    this.data = props.data;
    this.count(props.rowHeight,props.line) ;
    this.renderItem = props.renderItem
    this.items = [
       new ItemStore(0,this),
       new ItemStore(1,this),
       new ItemStore(2,this),
       new ItemStore(3,this)
    ];

  }
  @computed get itemsHeight () {
    return Math.ceil(this.data.length/this.itemhw.line)*this.itemhw.rowh
  };
  @action
  count = (rowh,line=1) => {
    let  cloum  = Math.ceil(height/rowh);
    this.itemhw = {
      rowh:rowh,
      line:line,
      cloum :cloum,
      rowNum:cloum*line,
      itemH:rowh*cloum,
    }

  }

  @action
  onScroll = (e) => {
     let offsetY = e.nativeEvent.contentOffset.y;
     let scrollContentH = e.nativeEvent.contentSize.height;
     let scrollH = e.nativeEvent.layoutMeasurement.height;
     let index = Math.floor((offsetY - this.headerHeight)/this.itemhw.itemH);
       this.page = Math.max(1,index);
       if(offsetY + scrollH  >= this.contentHeight ){
       this.isFetchMore = true
       }
  };

  @action
  fetchMore = () =>{
    this.Props.fetchMore&&this.Props.fetchMore()
  }



  @action
  contentLayout = (e) =>{
    this.contentHeight = e.nativeEvent.layout.height
    this.isFetchMore = false
  }


  @action
  headerLayout = (e) =>{
    this.headerHeight = e.nativeEvent.layout.height
  }
  @action
  add = (data) => {
    this.data.replace(data);
  }
}

class ItemStore {
  itemdata;
  constructor(num,rootStore,renderItem){
    this.num = num;
    this.renderItem = renderItem;
    this.rootStore = rootStore
    const arr = []
    for (let i = 0;i<1000;i++) {
      let now = i%4;
      let next = this.num - now ;
      if (next < -1){
        next = 4 + next
      }
      if (next === 3){
        next = -1
      }
      let page = i + next
      arr.push(page)
    }
    this.arr = arr
  }
}
