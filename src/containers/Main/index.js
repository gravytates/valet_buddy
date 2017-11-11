import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import positionerStyle from '../../lib/styles/positioner';


export class Main extends Component {
  render() {
    return (
      <View>
        <Text>Here is the main page!!</Text>
      </View>
    );
  }
}


export default Main;
