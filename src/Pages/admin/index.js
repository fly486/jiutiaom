import React from 'react';
import { Animated ,View,Text } from 'react-native';
import LottieView from 'lottie-react-native';


export default  class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  a  = new Animated.Value(20)
  b = new Animated.Value(10)
  c = Animated.add(this.a,this.b)

  co = () => {
    setInterval(()=>{
      if(this.p){
        this.p = false
        this.b.setValue(80)
      }else {
        this.p = true
        this.b.setValue(10)
      }
    },1)

    //this.ref.setNativeProps({top:50,height:30,})
    //this.setState({})
  }
  render() {
   // alert(Object.keys(require('../home/js/animations/9squares-AlBoardman.json')).length)
    return (
      <View style={{top:0,height:120,backgroundColor:'blue'}}>
        <Text onPress={this.co}>123</Text>
          <Animated.View ref = {ref=>this.ref=ref} style={{height:20,backgroundColor:'yellow',
            transform:[{ translateY:Animated.add(this.a,this.b)}], }}></Animated.View>
      </View>

    );
  }
}