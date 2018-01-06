
import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
  InteractionManager,
  PanResponder
} from 'react-native';
import {observable ,computed,action } from 'mobx';
import {observer} from 'mobx-react';
const {width,height} = Dimensions.get('window')
@observer
export default class Item extends React.Component{
  page = this.props.num
  newPage = this.props.num;
  constructor(props){
    super(props);
    props.data.rootStore.update.push(this.updata)
  }
  updata = (t = false,page) => {
    if(this.page!==this.newPage ){
      if(this.newPage === page &&  t){
        clearTimeout(this.timer)
        this.page = this.newPage;
        this.setState({})
      }else{
        this.setState({});
        this.page = this.newPage
      }

    }
  }

  @computed get nowTop () {
    const {data } = this.props;
    let page = data.arr[data.rootStore.page];
    this.newPage = page;
      this.viewRef&&this.viewRef.setNativeProps({
        top:page*data.rootStore.itemhw.itemH
      })
    const refshItem = data.rootStore.refshItem
    if(this.page !== this.newPage&&(refshItem|| data.rootStore.page < 2)){
      this.page = this.newPage
    }
    return this.page;
  }


render(){
    const {data} = this.props;
    console.log(`item${this.props.num}`)
    const start = this.newPage*data.rootStore.itemhw.rowNum;
    const end = start+data.rootStore.itemhw.rowNum;


    const cell =  data.rootStore.data.slice(start,end).map((item,idx)=>{
      return <View key = {idx}>{data.rootStore.renderItem(item,this.newPage*data.rootStore.itemhw.rowNum+idx,data.rootStore)}</View>
    })

    return (

      <View
        nowTop = {this.nowTop}
        ref = {ref=>  this.viewRef =ref}
        style = {[data.rootStore.itemhw.line !==1?styles.container:null,{ position:'absolute',width:width,top:this.props.num*data.rootStore.itemhw.itemH }]}>

        {cell}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexWrap:'wrap',
    flexDirection:'row',
    //justifyContent:'center',
  },
});