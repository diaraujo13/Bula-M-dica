import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform,  ScrollView, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';


class Details extends Component {

  render() {
    return (
      <View>
        <Text> Detalhes sobre </Text>
        <Text> {JSON.stringify(this.props.id)} </Text>
      </View>
    )
  };
};

const mapStateToProps = (state) => ({
  id: state.bulas.selected
})

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Details)
