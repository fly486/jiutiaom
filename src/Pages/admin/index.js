import React from 'react';
import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 15000,
    }).start();
  }

  render() {
   // alert(Object.keys(require('../home/js/animations/9squares-AlBoardman.json')).length)
    return (
      <LottieView
      style = {{width:140,height:140}}
      source={require('../../Lottie/TwitterHeart.json')} progress={this.state.progress} />
    );
  }
}