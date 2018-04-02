import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import { connect } from 'react-redux';
 class Historico extends Component {
  render() {
    return (
      <View>
        <Text> Historico </Text>
        <Text> {JSON.stringify(this.props.bulas.selected)} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  bulas: state.bulas
})

const mapDispatchToProps = {
  
};


export default connect(mapStateToProps, mapDispatchToProps)(Historico)
