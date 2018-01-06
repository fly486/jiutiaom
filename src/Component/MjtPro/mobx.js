

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
  itemhw = null;
  update = []
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
  onTouchStart = () =>{
    clearTimeout(this.timer)
    if(!this.refshItem){
      this.timer = setTimeout(()=> {
        this.update.forEach((fun)=>{
          fun(true,this.page)
        })
      }, 150)
    }


  }
  @action
  onScroll = (e) => {

     let offsetY = e.nativeEvent.contentOffset.y;
     let distance = Math.abs(offsetY - this.contentOffsetY);
     this.contentOffsetY = offsetY;
     let now: number = new Date().getTime();
     let speed: number = 0;
     let scrollContentH = e.nativeEvent.contentSize.height;
     let scrollH = e.nativeEvent.layoutMeasurement.height;
     let index = Math.floor((offsetY - this.headerHeight)/this.itemhw.itemH);

      if (this.lastScrollTime > 0) {
        speed = distance / (now - this.lastScrollTime);
      }
       this.lastScrollTime = now;
       if(speed > 5){
         clearTimeout(this.timer)
         this.refshItem = false
       }else {
         this.refshItem = true
       }
      if(speed  == 0){
        this.update.map((fun)=>{
          fun()
        })
      }
       this.page = Math.max(1,index);
       if(offsetY + scrollH  >= this.contentHeight ){

       this.isFetchMore = true

       }
  };

  @action
  fetchMore = () =>{
    this.update.map((fun)=>{
      fun()
    })
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
  //  this.data.slice(0,this.data.length,...data)
    this.data= data
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
