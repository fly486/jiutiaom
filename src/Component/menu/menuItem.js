

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { Heading2 } from '../../utils/text'
import { screen, } from '../../common'


class HomeMenuItem extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.container}
        onPress={this.props.onPress}>
        <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
        <Heading2>
          {this.props.title}
        </Heading2>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width / 5,
    height: screen.width / 5,
  },
  icon: {
    width: screen.width / 10,
    height: screen.width / 10,
    margin: 5,
  }
});

export default HomeMenuItem;
