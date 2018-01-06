import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput
} from "react-native";
import { Button } from 'antd-mobile';
export default class App extends React.Component {

  o = async () => {
    try{
      let response = await fetch('http://192.168.1.102:3002')
      let responseJson = await response.json();
      alert(JSON.stringify(response))
    } catch (err){
      alert(err)
    }

  }

  componentDidMount(){
    this.o
  }
  render(){
    return <Button>8888</Button>
  }
}