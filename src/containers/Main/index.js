import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { staticStyles, dynamicStyles } from './Splash/styles';

import positionerStyle from '../../lib/styles/positioner';


export class Main extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'rgb(50,50,50)', marginTop: 300}}>
        <Text style={{color: 'rgb(255,255,255)', fontSize: 30}}>Here is the main page!!</Text>
      </View>
    );
  }
}


export default Main;
